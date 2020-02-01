var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter Items
filter.addEventListener('keyup', filterItems);
// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    //Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input
    li.appendChild(document.createTextNode(newItem));
    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append delete button to li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {  // below we check if it contains 'delete' class
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    console.log(items);
    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            // ^ if it's not a match then it will equal -1
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}