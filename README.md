# grunt-requirejs-exam
grunt와 AMD 방식중 하나인 requireJS 를 연동하는 Example
 
#준비과정
grunt에서 제공하는 grunt-contrib-requirejs 를 설치한다.(npm 필수)

    npm install grunt-contrib-requirejs --save-dev

Gruntfile.js 에 다음과 같이 load 한다.

    grunt.loadNpmTasks('grunt-contrib-requirejs');

#기본구조
GruntFile.js 참고

    requirejs:{
     compile:{
      options: {
       // 다양한 (?) 옵션을 설정할 수 있다.
      }
     }
    }

##options
###baseUrl
options에서 사용할 dir root를 잡는 것 (requirejs랑 같다.)
###mainConfigFile
GruntFile.js 에서 requirejs config를 할 수 있지만, 재사용성과 , require.config()를 로드 하는 위치를 설정 한다.
###name
modules이나 includes할 것에 대한 정의를 하거나, config를 load 할 수 있게 해준다( 확실 하지 않음...)
name을 정의하지않는다면 꼭 modules이나 includes를 해야한다.
###out
output의 JS가 나오는 dir
###empty:
library 들은 굳이 optimize 할 필요 없기 때문에 'empty:' 키워드로 제외 시킬 수 있다.

##grunt running 하기
이제 running 하기 위한 키워드이다.

    grunt requirejs
 
 

####예제 링크 
http://58.227.42.221:14001
