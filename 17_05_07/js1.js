'use strict;'

var test=
    
    {
        question: 'Вопрос № 1',
        answer1: 'Ответ № 1',
        answer2: 'Ответ № 2',
        answer3: 'Ответ № 3', 
        answerCorrect: 'Ответ № 1',
    };
    

$(function(){
    var html=$('#test').html();
    
     var answer= tmpl(html,{
      data:test
});
   
        $('body').append(answer);
});


var arrUser=[];
var arrCorrect = [];
arrCorrect.push(test.answerCorrect);
var userJoin;

var myMassiv=[];
var correctJoin='';
correctJoin=arrCorrect.join();



var myTest={
    
};

    
   myTest.__proto__ = test;


  
$(document).ready(function(){


      $("input:submit").click(function() {

      $("input:checkbox:checked").each(function() {
       arrUser.push($(this).next('label').text());  
        

   
  userJoin= arrUser.join();
              if(userJoin==correctJoin) {alert('Вы правильно ответили!');}
     
            else{ alert("Тест не пройден")};
          
          
                 myTest.answerCorrect=  userJoin;  
           myMassiv.push(myTest.question, myTest.answerCorrect);});
      
     localStorage.setItem('anketa',JSON.stringify(myMassiv));
        
}); });
localStorage.getItem('anketa');
console.log(localStorage.getItem('anketa'));

