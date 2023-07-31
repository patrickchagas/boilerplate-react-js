# Boilerplate para iniciantes

- <a href="https://tailwindcss.com/docs/guides/vite" target="_blank">Instalação do Tailwind CSS com Vite </a>
- <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>
- <a href="https://reactrouter.com/en/main" target="_blank">React Router Dom</a>

## Aula criando o boilerplate

- <a href="https://www.youtube.com/watch?v=Rn7KJWr7VJY&ab_channel=PatrickChagas" target="_blank">Assistir a Aula</a>

## Htaccess utilizado na aula de hospedagem compartilhada

- <a href="https://youtu.be/vx0BQiRZV34" target="_blank">Assistir a Aula</a>

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# php -- BEGIN cPanel-generated handler, do not edit
# Defina o pacote “ea-php81” como a linguagem padrão de programação “PHP”.
<IfModule mime_module>
  AddHandler application/x-httpd-ea-php81___lsphp .php .php8 .phtml
</IfModule>
# php -- END cPanel-generated handler, do not edit

```