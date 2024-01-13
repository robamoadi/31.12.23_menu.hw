let counter = 1

function add_dish() {
    Swal.fire("SweetAlert2 is working!");
    const numberv = counter
    counter ++
    const namev = name.value
    const discribev = discribe.value
    const pricev = parseInt(price.value)
   
    const picturev = picture.value
    

    add_row(numberv, namev, discribev, pricev, picturev)
}

function clear_txt() {
    number.value = ''
    name.value = ''
    discribe.value = ""
    price.value = ''
    picture.value = ''
}
function add_row(numberv, namev, discribev, pricev, picturev) {
    const new_row = users_table.insertRow(-1);

    const cell_number = new_row.insertCell(0)
    const cell_name = new_row.insertCell(1)
    const cell_discribe = new_row.insertCell(2)
    const cell_price = new_row.insertCell(3)
    const cell_picture = new_row.insertCell(4)

    cell_number.innerHTML = numberv
    cell_name.innerHTML = namev
    cell_discribe.innerHTML = discribev
    cell_price.innerHTML = pricev
    cell_picture.innerHTML = '<img src="'+ picturev +'" style="width:90px;" />'

    clear_txt()
}


