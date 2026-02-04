import { Mail, Search, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Alert, Button, IconButton, TextField } from './components'

export function App() {
  const [email, setEmail] = useState('')
  const [search, setSearch] = useState('')

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-primary-900 mb-2">
          Sistema de Componentes Refatorado
        </h1>
        <p className="text-gray-600">
          Todos os componentes agora estão organizados em pastas kebab-case
        </p>
      </div>

      <section className="bg-white p-6 rounded-3xl shadow-card-default space-y-6">
        <h2 className="text-2xl font-semibold text-secondary-700">
          TextField Components
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField
            label="E-mail"
            placeholder="Digite seu e-mail"
            size="md"
            variant="outlined"
            leftIcon={<Mail size={18} />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            clearable
            onClear={() => setEmail('')}
          />

          <TextField
            label="Pesquisar"
            placeholder="Buscar..."
            size="md"
            variant="filled"
            leftIcon={<Search size={18} />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            clearable
            onClear={() => setSearch('')}
          />

          <TextField
            label="Nome"
            placeholder="Seu nome"
            size="md"
            variant="boxed"
          />

          <TextField
            label="Mensagem"
            placeholder="Digite algo"
            size="md"
            variant="underlined"
          />
        </div>
      </section>

      <section className="bg-white p-6 rounded-3xl shadow-card-default space-y-6">
        <h2 className="text-2xl font-semibold text-secondary-700">
          Button Components
        </h2>

        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="md">
            Primary Button
          </Button>
          <Button variant="secondary" size="md">
            Secondary Button
          </Button>
          <Button variant="ghost" size="md">
            Ghost Button
          </Button>
          <IconButton
            icon={<Trash2 size={20} />}
            variant="primary"
            buttonStyle="solid"
            size="md"
            shape="circle"
            aria-label="Deletar"
          />
          <IconButton
            icon={<Mail size={20} />}
            variant="secondary"
            buttonStyle="outline"
            size="md"
            shape="square"
            aria-label="Enviar e-mail"
          />
        </div>
      </section>

      <section className="bg-white p-6 rounded-3xl shadow-card-default space-y-6">
        <h2 className="text-2xl font-semibold text-secondary-700">
          Alert Components
        </h2>

        <div className="space-y-4">
          <Alert
            variant="success"
            emphasis="high"
            title="Sucesso!"
            description="Operação realizada com sucesso."
          />
          <Alert
            variant="warning"
            emphasis="medium"
            title="Atenção"
            description="Verifique os dados antes de continuar."
          />
          <Alert
            variant="error"
            emphasis="high"
            title="Erro"
            description="Ocorreu um erro ao processar sua solicitação."
          />
        </div>
      </section>

      <footer className="text-center text-gray-500 mt-12">
        <p>Estrutura de componentes: /components/[nome-kebab-case]/index.tsx</p>
      </footer>
    </div>
  )
}
