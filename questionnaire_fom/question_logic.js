function validateOrder(button) {
    const id = button.id;
    const id_group = id[1];
    const id_val = parseInt(id[2]);

    // if any elements in different groups, same val are checked, uncheck them

    for (group of ['a', 'b', 'c', 'd']) {
        if (group == id_group) continue;
        const other_button = document.getElementById('a' + group + id_val);
        if (other_button.checked) {
            alert("Each question must have a unique answer!");
            other_button.checked = false;
        }
    }
}

function calculateScore(question_number) {
    // index of each
    var a = 0, b = 0, c = 0, d = 0;

    for (let i = 1; i <= 4; i++) {
        if (document.getElementById('aa' + i).checked) a = 5 - i;
        if (document.getElementById('ab' + i).checked) b = 5 - i;
        if (document.getElementById('ac' + i).checked) c = 5 - i;
        if (document.getElementById('ad' + i).checked) d = 5 - i;
    }

    if (a == 0 || b == 0 || c == 0 || d == 0) {
        alert("Please answer all questions!");
        return false;
    }

    var cache = window.sessionStorage;
    cache.setItem("q" + question_number + "a", a);
    cache.setItem("q" + question_number + "b", b);
    cache.setItem("q" + question_number + "c", c);
    cache.setItem("q" + question_number + "d", d);

    const btn = document.querySelector('.btn-submit');

    //btn login and close events
    btn.addEventListener('click', ()=> {wrapper.classList.add('active');});
}