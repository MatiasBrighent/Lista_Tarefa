$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()

        const novaTarefa = $('#tarefa').val();
        console.log(novaTarefa);
        const novoItem =$('<li style="display: none"></li>');
        $(`<li> ${novaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(700);
        $('#tarefa').val('');
        
        $('ul').on('click','li', function(){
            $(this).css('text-decoration', 'line-through');
            $(this).css('color', 'red');
        })

        $('ul').on('dblclick','li', function(){
            $(this).css('text-decoration', 'none');
                $(this).css('color', 'black')
        })

        $('#limpar').on('click', function(){
            $('li').remove();
        })
    })
})