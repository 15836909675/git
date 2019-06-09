import mock from "mockjs"
mock.mock("/api/index",()=>{
    return 123
})