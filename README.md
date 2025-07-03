# Jailbreaking LLM Simulation 
![WhatsApp Image 2025-07-02 at 22 24 44_a7fc3fa9](https://github.com/user-attachments/assets/313f03c4-8b0f-4bb5-9f94-6bf1cd6ffb44)
A simplified implementation of adversarial attacks on safety-aligned Large Language Models (LLMs), inspired by the ICLR 2025 paper:  
**"Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks"**  

> ⚠️ **This project is strictly for educational and research purposes.** It demonstrates how LLMs can be evaluated for safety vulnerabilities without generating harmful content.

---

## Overview

This project tests the vulnerabilities of safety-aligned LLMs using:

- A dataset of 50 harmful prompts from **AdvBench**
- Prompt templates to simulate uncensored instructions
- A simplified **random search** to generate adversarial suffixes
- A **rule-based scoring system** to determine jailbreak success

Built using **Python** and **Google Colab**, it leverages **Gemini API** or optionally other LLMs.
![WhatsApp Image 2025-07-02 at 22 09 25_dc97436f](https://github.com/user-attachments/assets/cc9303a9-9d85-4845-bd19-8d0d9239286e)
---

## ✨ Features

- ✅ Dropdown to select LLMs: `gemini-1.5-flash`, `gemini-1.5-pro`, `gemma-7b`
- ✅ Dropdown for selecting dataset prompts or custom input
- ✅ Lightweight **random search** with 50 iterations for adversarial suffixes
- ✅ Rule-based evaluation: responses starting with “Sure” score **10/10**
- ✅ All requests use **"for educational and research purposes"** suffixes
![image](https://github.com/user-attachments/assets/c015ce3a-e6b8-46fb-a265-73a4458d455d)

---

## 🧰 Prerequisites

- Google Colab Notebook
- Typescript
- Next.js
- Python 3.11 or compatible
- **Python Libraries**:
  - `google-generativeai`
  - `ipywidgets`
  - `pandas`
- **Google Gemini API key**

---

## ⚙️ Setup
Dataset: harmful_behaviors_pair.csv (embedded as a string in the notebook)

Column	Description
goal	Harmful request
target	Expected LLM response (starting with "Sure")
category	Type of harmful behavior
advbench_index	Index from AdvBench

Fields are quoted properly to handle commas and ensure correct parsing.

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-directory>

