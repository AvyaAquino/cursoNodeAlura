import { autor } from "../models/Autor.js";

class autorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao listar autores :(` });
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao encontrar o autor :(` });
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com Sucesso!!", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor :(` });
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Atualizado com Sucesso!!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao atualizar o autor :(` });
        }
    }
    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Deletado com Sucesso!!" });
        }
        catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao deletar o autor :(` });
        }
    }

};

export default autorController;