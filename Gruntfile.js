module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs:{
            compile:{
                options:{
                    baseUrl : './',
                    mainConfigFile : 'src/config.js',
                    name : 'src/config',
                    include:['src/main'],
                    paths : {
                        jquery : 'empty:'
                    },
                    out:'./build/main-built.js',
                    findNestedDependencies: true,
                    error : function(done, err){
                        grunt.log.warn(err);
                    }
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    grunt.registerTask('default', ['requirejs']);

};
