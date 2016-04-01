module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs:{
            compile:{
                options:{
                    baseUrl : './',
			beautify : false,
			compress:{
				comparisons : true,
				drop_console: true
			},
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
                    },
			tasts : ['uglify']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
    grunt.registerTask('default', ['requirejs']);

};
