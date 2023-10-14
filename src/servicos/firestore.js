import { db } from "../config/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, onSnapshot } from "firebase/firestore";

export async function cadastrarProdutos(data) {
    try {
        await addDoc(collection(db, 'Comida'), data)
        return 'sucesso'
    } catch (error) {
        return 'erro'
    }
}

export async function buscarProdutos() {
    try {
        const querySnapshot = await getDocs(collection(db, 'Comida'))
        let produtos = []
        querySnapshot.forEach((doc) => {
            let produto = { id: doc.id, ...doc.data() }
            produtos.push(produto)
        });
        return produtos
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function atualizarProdutos(produtoID, data) {
    try {
        const produtoRef = doc(db, 'Comida', produtoID)
        await updateDoc(produtoRef, data)
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'error'
    }

}

export async function deletarProdutos(produtoID) {
    try {
        const produtoRef = doc(db, 'Comida', produtoID)
        await deleteDoc(produtoRef)
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function pegarProdutoTempoReal(setProdutos) {
    const ref = query(collection(db, 'Comida'))
    onSnapshot(ref, (querySnapshot) => {
        const produtos = []
        querySnapshot.forEach((doc) => {
            produtos.push({ id: doc.id, ...doc.data() })
        })
        setProdutos(produtos)
    })
}