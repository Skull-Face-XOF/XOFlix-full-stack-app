FROM python:3.12-slim

# Install system dependencies for mysqlclient
RUN apt-get update && apt-get install -y \
    build-essential \
    default-libmysqlclient-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV DJANGO_SETTINGS_MODULE=xoflix_backend.settings

CMD ["gunicorn", "xoflix_backend.wsgi:application", "--bind", "0.0.0.0:8000"]