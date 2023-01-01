const {src, dest} = require("gulp")
const sass = require("gulp-sass")(require("sass"));

function css(done) {  
    src("src/scss/app.scss") //Identifcar el archivo SASS
        .pipe(sass()) //Compilarlo
        .pipe(dest("build/css")); //Almacenarla en el disco duro
    done();//Callback que avisa a gulp que llegamos al final
}

exports.css = css;