$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()

        const novaTarefa = $('#tarefa').val();
        console.log(novaTarefa);
        const novoItem =$('<li></li>');
        $(`<li> ${novaTarefa}</li>`).appendTo(novoItem);
        $(`
            <div class="lista">
                <ul>
                    <li>${novaTarefa}</li>
                </ul>
            </div>
            `)
        $(novoItem).appendTo('ul')
        $('#tarefa').val('')

    })
})