import { Product } from "../types/types";


export const fetchItems = (): Product[] => {
  return [
      {
          id: 1,
          name: "Kit Amaciante",
          image: "/src/assets/img/produtos/Combo/KitAmaciante.png",
          description: "Kit Amaciante Ypê Concentrado Alquimia Liberdade + Inspiração 500ml Cada 50% de Desconto na 2a Unid",
          purchasePrice: 6.00,
          salePrice: 12.25,
          stock: 58,
          minStock: 10,
          category: "Combo",
          stockLocation: "Aisle 3",
          status: true,
      },
      {
          id: 2,
          name: "Kit Minuano",
          image: "/src/assets/img/produtos/Combo/KitMinuano.png",
          description: "Kit Lava Roupas Pó Roxo 1,6Kg e Amaciante Rosa 2L",
          purchasePrice: 12.00,
          salePrice: 24.22,
          stock: 60,
          minStock: 10,
          category: "Combo",
          stockLocation: "Aisle 3",
          status: true,
      },
      {
          id: 3,
          name: "Kit Natura",
          image: "/src/assets/img/produtos/Combo/KitNatura.png",
          description: `O Presente Natura Tododia Macadâmia é uma verdadeira demonstração de carinho e afeto. Ele traz um ritual completo de limpeza, hidratação e perfumação na fragrância cremosa e confortável de Tododia Macadâmia. Contém itens essenciais para o cuidado de Tododia, incluindo o Sabonete em Barra Puro Vegetal, o Creme Desodorante Nutritivo para o Corpo e o Body Splash Desodorante Colônia. Acompanha uma sacola especial de presente.
          Conteúdo:
          1 Body splash desodorante colônia 200 ml.
          1 Creme desodorante nutritivo para o corpo 400 ml.
          1 Caixa de sabonetes em barra puro vegetal com 5 unidades de 90 g cada.
          1 Sacola especial de presente M.`,
          purchasePrice: 50.00,
          salePrice: 114.90,
          stock: 12,
          minStock: 5,
          category: "Combo",
          stockLocation: "Aisle 4",
          status: true,
      },
      {
          id: 4,
          name: "COCA garrafa",
          image: "/src/assets/img/produtos/Bebida/Coca.png",
          description: "É hora de celebrar a união de duas potências icônicas dos quadrinhos e dos refrigerantes: Marvel e Coca-Cola. Desfrute da magia e de todo o sabor de Coca-Cola Original 220ml em uma colaboração épica Mergulhe em um mundo de heróis e vilões enquanto desfruta da refrescância única da Coca-Cola Original 220ml. Esta edição limitada traz uma experiência totalmente nova para os fãs do Universo Marvel.",
          purchasePrice: 1.00,
          salePrice: 1.99,
          stock: 200,
          minStock: 50,
          category: "Bebida",
          stockLocation: "Aisle 1",
          status: true,
      },
      {
          id: 5,
          name: "FANTA lata",
          image: "/src/assets/img/produtos/Bebida/Fanta.png",
          description: "A Fanta é um refrigerante popular conhecido por seu sabor doce e frutado, geralmente disponível em vários sabores, sendo o mais comum o de laranja.",
          purchasePrice: 1.20,
          salePrice: 2.25,
          stock: 300,
          minStock: 50,
          category: "Bebida",
          stockLocation: "Aisle 1",
          status: true,
      },
      {
          id: 6,
          name: "Heineken garrafa",
          image: "/src/assets/img/produtos/Bebida/Heineken.png",
          description: "Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado, produzida com ingredientes 100% naturais: água, malte e lúpulo. Durante o processo de fermentação da Heineken, a exclusiva Levedura A é responsável pelo sabor característico e bem equilibrado, com notas frutadas sutis. A cerveja é fabricada em tanques horizontais para mais sabor e consistência. É por isso que nenhuma outra cerveja tem o gosto de Heineken. Na icônica versão em Long Neck de 330ml (6 unidades), ela possui teor alcoólico de 5% e a temperatura ideal de consumo é de 3º a 5º. A Heineken foi criada para ser a melhor cerveja do mundo desde 1873. Algumas coisas são boas demais para mudar! A lager é mais leve e combina bem com hambúrguer, comida mexicana, queijos e castanhas.",
          purchasePrice: 3.50,
          salePrice: 6.79,
          stock: 600,
          minStock: 100,
          category: "Bebida",
          stockLocation: "Aisle 1",
          status: true,
      },
      {
          id: 7,
          name: "Batata congelada",
          image: "/src/assets/img/produtos/Porcao/BatataFritaCongelada.png",
          description: "A batata corte fino 7mm McCain é congelada, pré frita e já com corte em formato palito com espessura de 7mm.",
          purchasePrice: 15.00,
          salePrice: 30.56,
          stock: 68,
          minStock: 20,
          category: "Porção",
          stockLocation: "Aisle 2",
          status: true,
      },
      {
          id: 8,
          name: "Asinha Frango",
          image: "/src/assets/img/produtos/Porcao/AsinhaFrango.png",
          description: "Coxinha da Asa de Frango Congelada, da marca Sadia, em embalagem com 1 quilo. Parte da linha Bio, provém de aves criadas sem o uso de antibióticos e com alimentação 100% vegetal, o que auxilia em sua qualidade. O corte, que é retirado da parte superior da asa do frango, possui textura macia e conta com osso. Com pele e sabor delicado, traz equilíbrio entre a quantidade de carne e gordura. Quanto às possibilidades de preparo, a coxinha da asa pode ser cozida, grelhada, assada ou frita, adaptando-se aos mais variados gostos e estilos de culinária. É uma opção perfeita para churrascos, petiscos, pratos principais ou até mesmo para compor receitas mais elaboradas, como ensopados e assados. Fonte de proteínas, também é rica em vitaminas do complexo B e em minerais diversos, como fósforo, por exemplo. Sua porção de 100 gramas possui, aproximadamente, valor energético de 128 kcal, 14 gramas de proteínas, 5,4 gramas de gorduras totais e 58 miligramas de sódio. Para conservar o alimento, é recomendado mantê-lo congelado, em temperatura de -12oC ou mais frio. Dessa forma, são preservadas as características do produto e mantida sua segurança alimentar.",
          purchasePrice: 13.00,
          salePrice: 27.25,
          stock: 20,
          minStock: 5,
          category: "Porção",
          stockLocation: "Aisle 2",
          status: true,
      },
      {
          id: 9,
          name: "Bolinho Bacalhau",
          image: "/src/assets/img/produtos/Porcao/BolinhoBacalhau.png",
          description: "Os Bolinhos com Bacalhau Seara são feitos com bacalhau nobre, seguindo a tradicional receita portuguesa. Práticos para fazer no dia a dia, seja no almoço ou no jantar, ou até mesmo servir como aperitivo naquelas ocasiões especiais. Além de ser saboroso e irresistível, é muito fácil de preparar e fica pronto em poucos minutos, inclusive você também pode fazer o bolinho de bacalhau Frito ou assado, é uma delícia!",
          purchasePrice: 16.00,
          salePrice: 32.50,
          stock: 20,
          minStock: 5,
          category: "Porção",
          stockLocation: "Aisle 2",
          status: true,
      },
  ];
};
