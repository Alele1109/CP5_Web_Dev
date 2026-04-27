import React from 'react'
import Card from '../components/Card'
import jogo from '../assets/imgs/jogo1.png'

const produtos = [
  {
    id: 1,
    name: 'Tales of Mordoria',
    description: 'Mergulhe de cabeça em um RPG de ação épico, onde você é um aventureiro em busca de glória e tesouros na misteriosa terra de Mordoria.',
    price: 149.9,
    oldPrice: 199.9,
    category: 'Jogos',
    image: jogo,
  },
  {
    id: 2,
    name: 'Cyberbug 1866',
    description: 'Jogue neste mundo onde você é um hacker em 1866.',
    price: 79.9,
    oldPrice: null,
    category: 'Expansão',
    image: jogo,
  },
  {
    id: 3,
    name: 'Malário Bros.',
    description: 'Jogue neste mundo 2d plataformer onde Malário derrota Browser.',
    price: 349.9,
    oldPrice: 399.9,
    category: 'Colecionador',
    image: jogo,
  },
  {
    id: 4,
    name: 'Roachman: Morales Miles',
    description: 'A história de Morales Miles, o Homem-barata, um herói improvável que luta contra o crime em uma cidade infestada de baratas.',
    price: 59.9,
    oldPrice: null,
    category: 'Cartas',
    image: jogo,
  }
]

export default function Produtos() {
  return (
    <section className="px-7 py-10 text-left">
      <h2 className="text-3xl font-bold tracking-tight text-(--text-h) mb-8">Produtos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <Card key={produto.id} {...produto} />
        ))}
      </div>
    </section>
  )
}