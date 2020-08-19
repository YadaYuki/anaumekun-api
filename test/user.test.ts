import request from "supertest"
// TODO: API_URLのenv化
const API_URL = "http://localhost:3000/dev"
describe("Test User Api",()=>{
    it("Sample",()=>{
        expect(1+1).toBe(2);
    })
    it("Get Sample Api",async()=>{
        const response = await request(API_URL).get("/api/users/sample")
        expect(response.status).toBe(200);
    })
    it("Post User For Registration",async()=>{
        const response = await request(API_URL).post("/api/users/regist").send({username:"yadayuki",email:"yada.yuki@fuji.waseda.jp",password:"password"})
        expect(Object.keys(response.body)).toBe([["is_login","jwt"]])
    })
})