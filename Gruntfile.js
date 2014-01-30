module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade: {
            debug: {
                options: {
                    pretty: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'source',
                        dest: 'source',
                        src: '*.jade',
                        ext: '.html'
                    }
                ]
            },
            release: {
                files: [
                    {
                        expand: true,
                        cwd: 'source',
                        dest: 'dist',
                        src: '*.jade',
                        ext: '.html'
                    }
                ]
            }
        },
        sass: {
            debug: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'source/css/style.css': 'source/sass/style.scss'
                }
            },
            release: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/style.css': 'source/sass/style.scss'
                }
            }
        },
        coffee: {
            debug: {
                options: {
                    sourceMap: true
                },
                files: {
                    'source/javascript/application.js': 'source/coffeescript/application.coffee',
                    'source/javascript/RoadManager.js': 'source/coffeescript/RoadManager.coffee',
                    'source/javascript/CarManager.js': 'source/coffeescript/CarManager.coffee'
                }
            },
            release: {
                options: {
                    join: true
                },
                files: {
                    'dist/javascript/application.js': 'source/coffeescript/application.coffee',
                    'dist/javascript/RoadManager.js': 'source/coffeescript/RoadManager.coffee'
                }
            }
        },
        copy: {
            scripts: {
                files: [
                    {
                        expand: true, 
                        cwd: 'source/javascript/vendor', 
                        src: ['**'], 
                        dest: 'dist/javascript/vendor'
                    }
                ]
            },
            images: {
                files: [
                    {
                        expand: true, 
                        cwd: 'source/images', 
                        src: ['**'], dest: 'dist/images'
                    }
                ]
            }
        },
        coffeelint: {
            options: {
                'no_trailing_whitespace': {
                    'level': 'warn'
                }
            },
            app: ['source/coffeescript/*.coffee']
        },
        //TODO: uglify solo es un ejemplo, corregir para la version final
        uglify: {
            release: {
                files: {
                    'source/javascript/application.min.js': ['source/javascript/application.js']
                }
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        expand: true,
                        cwd: 'source/images',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'dist/images'
                    }
                ]
            }
        },
        watch: {
            jadewatch: {
                files: ['source/*.jade', 'source/layouts/*.jade', 'source/partials/*.jade'],
                tasks: ['jade'],
                options: {                   
                    nospawn: true
                }
                
            },
            sasswatch: {
                files: ['source/sass/*.scss', 'source/sass/*/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true,                    
                    nospawn: true
                }
            },
            coffeewatch: {
                files: ['source/coffeescript/*.coffee'],
                tasks: ['coffee'],
                options: {                   
                    nospawn: true
                }
            }
        }
    });

    //Inicializar plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-jade');
    //TODO: pendiente de uso y configuracion
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Definicion de tareas
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('development', ['watch']);
    grunt.registerTask('production', ['jade:release', 'sass:release', 'coffee:release', 'imagemin']);

};