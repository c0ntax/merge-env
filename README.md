# merge-env-cli

A simple script to take an existing dotenv file and dump existing env files into it

## Install

```bash
npm install -g merge-env-cli
```

## Usage

```bash
env | merge-env-cli ./path/to/.env.template > .env
```

By piping you environment variables into `merge-env-cli` and supplying the template, this simple
script will output to stdout a new .env file that contains the template with the piped variables
inserted if they exist