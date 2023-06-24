const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    it("Código 200 comprueba 1 Arreglo al menos 1 Objeto", async () => {
        const { status, body } = await request(server)
            .get("/cafes")
            .send()
        expect(status).toBe(200)
        expect(body).toBeInstanceOf(Array)
        expect(body.length).toBeGreaterThan(0)
    })
    it("Código 404 si elimina id inexistente", async () => {
        const idPorParametro = Math.floor(Math.random() * 999);
        const { status } = await request(server)
            .delete(`/cafes/${idPorParametro}`)
            .set("Authorization", "token")
            .send()
        expect(status).toBe(404);
    })
    it("Código 201 agrega nuevo registro exitosamente", async () => {
        const id = Math.floor(Math.random() * 999);
        const nuevoRegistro = { id, nombre: "espresso" }
        const { status } = await request(server)
            .post("/cafes")
            .send(nuevoRegistro)
        expect(status).toBe(201);
    })
    it("Código 400 distinto id en parámetro y payload", async ()=>{
        const idPorParametro = Math.floor(Math.random() * 999);
        const idNuevoRegistro = Math.floor(Math.random() * 777);
        const nuevoRegistro = { idNuevoRegistro, nombre: "espresso" }
        const { status } = await request(server)
            .put(`/cafes/${idPorParametro}`)
            .send(nuevoRegistro)
        expect(status).toBe(400);
    })

});
