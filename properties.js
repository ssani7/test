var item = {
    name: "firstItem",
    color: "red",
    size: 25
}
var showColor = item.color;
var shwName = item.name;

//3 ways to replace a property of an object
item.name = "secondItem"; //1st way
item["name"] = "thirdItem"; //second way

// 3rd way 
var itemName = "name";
item[itemName] = "fourthItem"

console.log(item);