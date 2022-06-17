let obj  = {
    header: "a",
    body: "b",
    footer: "c"
}
delete obj.header;
Object.entries(obj).map(([key, value]) => {
    console.log(key);
}
);