# Jailbreaking LLM Simulation

A simplified implementation of adversarial attacks on safety-aligned Large Language Models (LLMs), inspired by the ICLR 2025 paper:  
**"Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks"**  

> ⚠️ **This project is strictly for educational and research purposes.** It demonstrates how LLMs can be evaluated for safety vulnerabilities without generating harmful content.

---

## 🧠 Overview

This project tests the vulnerabilities of safety-aligned LLMs using:

- A dataset of 50 harmful prompts from **AdvBench**
- Prompt templates to simulate uncensored instructions
- A simplified **random search** to generate adversarial suffixes
- A **rule-based scoring system** to determine jailbreak success

Built using **Python** and **Google Colab**, it leverages **Gemini API** or optionally other LLMs.

---

## ✨ Features

- ✅ Dropdown to select LLMs: `gemini-1.5-flash`, `gemini-1.5-pro`, `gemma-7b`
- ✅ Dropdown for selecting dataset prompts or custom input
- ✅ Lightweight **random search** with 50 iterations for adversarial suffixes
- ✅ Rule-based evaluation: responses starting with “Sure” score **10/10**
- ✅ All requests use **"for educational and research purposes"** suffixes

---

## 🧰 Prerequisites

- Google Colab Notebook
- Python 3.11 or compatible
- **Python Libraries**:
  - `google-generativeai`
  - `ipywidgets`
  - `pandas`
- **Google Gemini API key**

---

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-directory>

