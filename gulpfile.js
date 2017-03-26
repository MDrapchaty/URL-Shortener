const gulp = require('gulp');
const util = require('drapdebug');
const git = require('gulp-git');
const gitignore = require('gulp-gitignore');
const argv = require('yargs').argv;
const fs = require('fs');


const src = gulp.src('./*').pipe(gitignore());  // Get files without .gitignore files.
const pkg = JSON.parse(fs.readFileSync('./package.json')); // Store Package.JSON path to a var/const

gulp.task('add', () => src.pipe(git.add())); // Task to Add all files in git


gulp.task('commit', () => { // Task to commit to git. Passing -m with a "message"
// in cli gulp call adds a message to commit.
  if (argv.m) { // If -m "message" is entered in gulp task call, use it
    src.pipe(git.commit(argv.m));
    return `Committed with message: ${argv.m}`;
  } // Otherwise use the default message.
  src.pipe(git.commit('Changes commited'));
  return 'Successful commit without -m "message".';
});

gulp.task('verBump', () => { // Task to version bump in package.JSON using drapdebug tool.
  // -r "patch"|"minor"|"major" is required to pass the release type to version bump
  // Create the new version
  const verNew = util.verBump(pkg.version, argv.r);
  pkg.version = verNew; // update Package.JSON to new version
  const newPackage = JSON.stringify(pkg, null, '  '); // Stringify the pkg contents.
  fs.writeFile('./package.json', newPackage); // Write to package.JSON
});

gulp.task('addCommit', ['add', 'commit']); // Task to add and commit to git.
// Passing -m "message" in cli gulp call adds a message to commit.

gulp.task('push', () => {
  git.push('origin', 'master', (err) => {
    if (err) throw err;
  });
});
