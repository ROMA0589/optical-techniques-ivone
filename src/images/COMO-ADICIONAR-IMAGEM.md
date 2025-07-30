# Instruções para Adicionar a Imagem Profissional

## 📍 Localização no Site

A **imagem profissional de Ivone** deve ser colocada na **seção Hero** (primeira seção da página), do lado direito, onde atualmente está o placeholder com o texto:

```
📓
Imagem profissional
será inserida aqui
```

## 📂 Onde Colocar o Arquivo

1. **Pasta:** `src/images/`
2. **Nome sugerido:** `ivone-profissional.jpg` (ou .png)
3. **Caminho completo:** `src/images/ivone-profissional.jpg`

## 🖼️ Especificações da Imagem

### Tamanho Recomendado
- **Largura:** 400-600px
- **Altura:** 300-450px
- **Formato:** JPG ou PNG
- **Qualidade:** Alta resolução, mas otimizada para web

### Características Ideais
- ✅ **Foto profissional** de Ivone
- ✅ **Fundo neutro** ou relacionado à óptica
- ✅ **Boa iluminação**
- ✅ **Expressão confiável e amigável**
- ✅ **Vestimenta profissional**

## 🔧 Como Implementar

### Passo 1: Colocar a imagem
```bash
# Copiar sua imagem para:
src/images/ivone-profissional.jpg
```

### Passo 2: Atualizar o HTML
Substituir no arquivo `index.html` (linha ~55-59):

**DE:**
```html
<div class="placeholder-image">
  <span>📓</span>
  <p>Imagem profissional<br>será inserida aqui</p>
</div>
```

**PARA:**
```html
<div class="hero-photo">
  <img src="./src/images/ivone-profissional.jpg" 
       alt="Ivone Roma - Técnico em Óptica" 
       class="professional-photo">
</div>
```

### Passo 3: Atualizar o CSS
Adicionar no arquivo `src/style.css`:

```css
.hero-photo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.professional-photo {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: var(--shadow-medium);
  object-fit: cover;
}
```

## 📱 Preview da Seção

Após adicionar a imagem, a seção Hero ficará assim:

```
┌─────────────────────────────────────────────────────┐
│ LADO ESQUERDO          │  LADO DIREITO              │
│                        │                            │
│ Bem-vindo ao mundo     │   [FOTO DE IVONE]         │
│ das Técnicas em Óptica │   (400x300px)             │
│                        │   Profissional             │
│ 32+ Anos | Desde 1992  │   Confiável                │
│                        │                            │
│ [Saiba Mais]           │                            │
└─────────────────────────────────────────────────────┘
```

## ✅ Checklist

- [ ] Imagem copiada para `src/images/`
- [ ] HTML atualizado
- [ ] CSS atualizado (se necessário)
- [ ] Testado no navegador
- [ ] Verificado responsividade mobile

## 🚀 Resultado Esperado

A imagem substituirá o placeholder e dará um toque muito mais profissional ao site, mostrando Ivone como a especialista confiável que ela é, com 30+ anos de experiência.

---

**💡 Dica:** Se precisar redimensionar a imagem, posso ajudar a ajustar o CSS para que fique perfeita!
