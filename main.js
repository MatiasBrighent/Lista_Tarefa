$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()

        const novaTarefa = $('#tarefa').val();
        console.log(novaTarefa);
        const novoItem =$('<li style="display: none"></li>');
        $(
            `<li> 
                ${novaTarefa}
                <img src="./imagens/correto.jpg" id="correto">
                <img src="./imagens/lixxeira.jpg" id="lixeira">
            </li>`
        ).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(700);
        $('#tarefa').val('');
        
        $('li').on('click', function(){
            $(this).css('text-decoration', 'line-through');
            $(this).css('color', 'green');
        })

        $('li').on('dbclick', function(){
            $(this).css('text-decoration', 'none');
            $(this).css('color', 'black');
        })

        $('#lixeira').on('click',function(){
            $('li').remove();
        })

        $('#limpar').on('click', function(){
            $('li').remove();
        })
    })
})