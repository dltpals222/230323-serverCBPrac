import tagMakeCall from '../modules/tagMakeCall.js'

const root = document.getElementById('root')
const rootchild = [
  [root, 'input', function(element){
    element.setAttribute('id','about-btn')
    element.setAttribute('value','about버튼')
    element.setAttribute('type','button')
  }],
  [root, 'input', function(element){
    element.setAttribute('id','contact-btn')
    element.setAttribute('value','contact버튼')
    element.setAttribute('type','button')
  }],
  [root, 'input', function(element){
    element.setAttribute('id','404-btn')
    element.setAttribute('value','404버튼')
    element.setAttribute('type','button')
  }],
]

for(let i=0;i<rootchild.length;i++){
  tagMakeCall(rootchild[i][0],rootchild[i][1],rootchild[i][2])
}