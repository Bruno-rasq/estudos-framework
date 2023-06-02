const btn = document.getElementById("btn");
const drop = document.getElementById("dropdown");

const toggleDropdonw = () => {
    drop.foreach((el) => el.classlist.toggle("hidden"));
}

btn.addEventlistener("click", () => {
    toggleDropdonw();
});