/*
Download original at https://github.com/wamuM/mtx.js

by wamu_M

v0.2
adapted light version
*/

class Matrix extends Array{
    constructor(value1,value2,placeholder = undefined){
        if (typeof value1 === "object") {
          if (value1[0][0] != undefined && !value2){
            super(value1.length)
            for(let i = 0; i!=value1.length;i++){
              this[i] = value1[i];
             }
          }
          else {
            if(value1.length%value2 != 0)return console.error("mtx.js> could not create the matrix because the amount of rows doesn't fit the provided array.")
            super([])
            let i = 0;
            value1.forEach((v) => {
              if (i == value2) {
                i = 0;
                this[this.length]=[];
              }
              this[this.length - 1].push(v);
              i++;
            });
          }
        } else if (!isNaN(value1)){
          super(value1)
          for(let i=0; i!=value1; i++){
              this[i] = new Array(value2);
            for(let j = 0;j!=value2;j++){
              this[i][j] = placeholder;
            }
          };
        }
    }  
};

export default Matrix;
