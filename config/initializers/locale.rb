# Adicionando os arquivos de tradução ao caminho de carregamento do I18n
I18n.load_path += Dir[Rails.root.join('config', 'locale', '*.{rb,yml}')]

# Definindo os locais disponíveis
I18n.available_locales = [:"pt-BR"]

# Definindo o local padrão
I18n.default_locale = :"pt-BR"