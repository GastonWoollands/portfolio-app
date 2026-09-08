/**
 * CV / resume content used as context for the portfolio chatbot.
 */
export const CV_CONTEXT = `
GASTON WOOLLANDS
Senior ML Engineer

I design ML systems and the products around them — from field agents to market research terminals.

Professional summary
Senior ML Engineer with expertise in statistical modeling, machine learning, and scalable cloud solutions. Specialist in NLP, predictive modeling, and MLOps. Architects end-to-end data pipelines and integrates advanced analytics into business decisions on AWS and Azure.

Experience

Qualifyze — Senior ML Eng | Sep 2025–present
- Risk scoring and compliance: predictive risk scoring models for pharmaceutical manufacturing sites; automated compliance assessment and proactive quality management.
- NLP and entity resolution: matching algorithms on unstructured industry text; improved entity resolution and data linkage across global databases.
- Cloud MLOps: scalable ML platforms on AWS with Terraform (IaC). EKS, ECR, IAM, and VPC for high-availability model serving and automated ML pipelines.

Kantar Media — Data Scientist | Mar 2024–Sep 2025
- Visual-AI and CI/CD: end-to-end symbology detection service with CI/CD to automate delivery and reduce cost.
- Generative AI (RAG): retrieval-augmented generation on private internal data for domain-specific question answering.
- MLOps: cloud workflows on Kubernetes via Azure DevOps for production model deployment.

Fossil Group — Data Scientist | Feb 2020–Mar 2024
- Demand forecasting for supply chain; reduced stock imbalances and operational cost.
- Customer segmentation via clustering for acquisition and retention.
- Price elasticity models for data-informed pricing.

Education
- MSc in Quantitative Finance — Dec 2024
- MSc in Data Science & Machine Learning — Jul 2021
- BSc in Economics & Econometrics — Jul 2019

Technical skills (visible on site)
Python · SQL · AWS · Kubernetes · MLflow · NLP

Additional skills (for detailed questions)
- Programming: Python, SQL (PostgreSQL), PySpark
- ML / AI: Scikit-learn, PyTorch, XGBoost, LightGBM, Prophet, LSTM
- ML engineering / infra: Docker, Terraform, EKS, ECR, IAM, VPC, CI/CD
- Orchestration: Airflow, Dagster, Kubernetes, Azure DevOps
- Cloud: AWS, Azure
- Roles: Data Science, ML Engineering, MLOps / Infra

Personal products

1. MetriCow — https://www.metricow.com/
Livestock operations for multiple farms: inventory, weights, clinical history, insemination, and metrics. Agent over WhatsApp and web chat; CSV updates apply only after confirmation. Built for veterinarians, producers, and field teams.

2. Market Agent / Sector Panel — https://github.com/GastonWoollands/market_agent
Public-market research terminal. Ingest from SEC EDGAR, Yahoo (delayed), FRED, Polymarket, Fed RSS, and news into Postgres; FastAPI + Next.js UI. Surfaces: Live, Outlook, Dynamics, Valuation, Opportunities, Watchlist. Writer LLM only sees a packed evidence file. Delayed data. No trading.

Contact
Email: contact@gwoollands.com
GitHub: https://github.com/GastonWoollands
LinkedIn: https://www.linkedin.com/in/gaston-woollands/
Medium: https://medium.com/@g.woollands
`.trim()
