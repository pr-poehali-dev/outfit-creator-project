import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedOutfit, setSelectedOutfit] = useState({
    top: null,
    bottom: null,
    shoes: null,
  });

  const [favorites, setFavorites] = useState<string[]>([]);

  const sampleClothes = {
    tops: [
      {
        id: 1,
        name: "Розовая блузка",
        image: "/img/4cc0ac37-3cb0-4e07-8aaf-1b216015a231.jpg",
        tags: ["лето", "офис", "розовый"],
      },
      {
        id: 2,
        name: "Черная рубашка",
        image: "/img/4cc0ac37-3cb0-4e07-8aaf-1b216015a231.jpg",
        tags: ["классика", "черный"],
      },
      {
        id: 3,
        name: "Сиреневый топ",
        image: "/img/4cc0ac37-3cb0-4e07-8aaf-1b216015a231.jpg",
        tags: ["лето", "сиреневый"],
      },
    ],
    bottoms: [
      {
        id: 4,
        name: "Черные джинсы",
        image: "/img/4cc0ac37-3cb0-4e07-8aaf-1b216015a231.jpg",
        tags: ["повседневный", "черный"],
      },
      {
        id: 5,
        name: "Розовая юбка",
        image: "/img/4cc0ac37-3cb0-4e07-8aaf-1b216015a231.jpg",
        tags: ["лето", "розовый"],
      },
      {
        id: 6,
        name: "Сиреневые брюки",
        image: "/img/4cc0ac37-3cb0-4e07-8aaf-1b216015a231.jpg",
        tags: ["офис", "сиреневый"],
      },
    ],
    shoes: [
      {
        id: 7,
        name: "Черные туфли",
        image: "/img/4cc0ac37-3cb0-4e07-8aaf-1b216015a231.jpg",
        tags: ["офис", "черный"],
      },
      {
        id: 8,
        name: "Розовые кроссовки",
        image: "/img/4cc0ac37-3cb0-4e07-8aaf-1b216015a231.jpg",
        tags: ["спорт", "розовый"],
      },
      {
        id: 9,
        name: "Сиреневые балетки",
        image: "/img/4cc0ac37-3cb0-4e07-8aaf-1b216015a231.jpg",
        tags: ["лето", "сиреневый"],
      },
    ],
  };

  const toggleFavorite = (itemId: string) => {
    setFavorites((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  };

  const generateRandomOutfit = () => {
    const randomTop =
      sampleClothes.tops[Math.floor(Math.random() * sampleClothes.tops.length)];
    const randomBottom =
      sampleClothes.bottoms[
        Math.floor(Math.random() * sampleClothes.bottoms.length)
      ];
    const randomShoes =
      sampleClothes.shoes[
        Math.floor(Math.random() * sampleClothes.shoes.length)
      ];

    setSelectedOutfit({
      top: randomTop,
      bottom: randomBottom,
      shoes: randomShoes,
    });
  };

  const ClothingCard = ({ item, type, isSelected = false, onSelect }: any) => (
    <Card
      className={`cursor-pointer transition-all duration-300 hover:scale-105 glass-card ${
        isSelected ? "ring-2 ring-primary" : ""
      }`}
      onClick={() => onSelect && onSelect(item, type)}
    >
      <CardHeader className="pb-2">
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-32 object-cover rounded-md"
          />
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(item.id.toString());
            }}
          >
            <Icon
              name={favorites.includes(item.id.toString()) ? "Heart" : "Heart"}
              size={16}
              className={
                favorites.includes(item.id.toString())
                  ? "fill-primary text-primary"
                  : "text-white"
              }
            />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardTitle className="text-sm font-medium mb-2">{item.name}</CardTitle>
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag: string, index: number) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-montserrat gradient-text">
              Outfit Creator
            </h1>
            <nav className="flex items-center space-x-6">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary"
              >
                <Icon name="Shirt" size={20} className="mr-2" />
                Ваш образ
              </Button>
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary"
              >
                <Icon name="Shuffle" size={20} className="mr-2" />
                Рандомайзер
              </Button>
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary"
              >
                <Icon name="Closet" size={20} className="mr-2" />
                Гардероб
              </Button>
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary"
              >
                <Icon name="Heart" size={20} className="mr-2" />
                Избранное
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold font-montserrat gradient-text mb-6">
            Создай свой идеальный образ
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Собирай стильные образы из своего гардероба, экспериментируй с
            комбинациями и находи вдохновение каждый день
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="gradient-bg hover:opacity-90">
              <Icon name="Upload" size={20} className="mr-2" />
              Загрузить одежду
            </Button>
            <Button size="lg" variant="outline" onClick={generateRandomOutfit}>
              <Icon name="Shuffle" size={20} className="mr-2" />
              Случайный образ
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="create" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="create">Создать образ</TabsTrigger>
            <TabsTrigger value="random">Рандомайзер</TabsTrigger>
            <TabsTrigger value="wardrobe">Гардероб</TabsTrigger>
            <TabsTrigger value="favorites">Избранное</TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Current Outfit Display */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-montserrat">
                  Текущий образ
                </h3>
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="text-center">
                        <Icon
                          name="Shirt"
                          size={48}
                          className="mx-auto text-primary mb-2"
                        />
                        <p className="text-sm text-muted-foreground">
                          {selectedOutfit.top
                            ? selectedOutfit.top.name
                            : "Выберите верх"}
                        </p>
                      </div>
                      <div className="text-center">
                        <Icon
                          name="User"
                          size={48}
                          className="mx-auto text-primary mb-2"
                        />
                        <p className="text-sm text-muted-foreground">
                          {selectedOutfit.bottom
                            ? selectedOutfit.bottom.name
                            : "Выберите низ"}
                        </p>
                      </div>
                      <div className="text-center">
                        <Icon
                          name="Footprints"
                          size={48}
                          className="mx-auto text-primary mb-2"
                        />
                        <p className="text-sm text-muted-foreground">
                          {selectedOutfit.shoes
                            ? selectedOutfit.shoes.name
                            : "Выберите обувь"}
                        </p>
                      </div>
                    </div>
                    {selectedOutfit.top &&
                      selectedOutfit.bottom &&
                      selectedOutfit.shoes && (
                        <div className="mt-6 pt-4 border-t border-border">
                          <Button className="w-full gradient-bg">
                            <Icon name="Heart" size={20} className="mr-2" />
                            Сохранить образ
                          </Button>
                        </div>
                      )}
                  </CardContent>
                </Card>
              </div>

              {/* Clothing Selection */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-montserrat">
                  Выбрать одежду
                </h3>
                <Tabs defaultValue="tops" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tops">Верх</TabsTrigger>
                    <TabsTrigger value="bottoms">Низ</TabsTrigger>
                    <TabsTrigger value="shoes">Обувь</TabsTrigger>
                  </TabsList>

                  <TabsContent value="tops" className="mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      {sampleClothes.tops.map((item) => (
                        <ClothingCard
                          key={item.id}
                          item={item}
                          type="top"
                          isSelected={selectedOutfit.top?.id === item.id}
                          onSelect={(item: any, type: string) =>
                            setSelectedOutfit((prev) => ({
                              ...prev,
                              [type]: item,
                            }))
                          }
                        />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="bottoms" className="mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      {sampleClothes.bottoms.map((item) => (
                        <ClothingCard
                          key={item.id}
                          item={item}
                          type="bottom"
                          isSelected={selectedOutfit.bottom?.id === item.id}
                          onSelect={(item: any, type: string) =>
                            setSelectedOutfit((prev) => ({
                              ...prev,
                              [type]: item,
                            }))
                          }
                        />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="shoes" className="mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      {sampleClothes.shoes.map((item) => (
                        <ClothingCard
                          key={item.id}
                          item={item}
                          type="shoes"
                          isSelected={selectedOutfit.shoes?.id === item.id}
                          onSelect={(item: any, type: string) =>
                            setSelectedOutfit((prev) => ({
                              ...prev,
                              [type]: item,
                            }))
                          }
                        />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="random" className="space-y-8">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold font-montserrat">
                Генератор случайных образов
              </h3>
              <Card className="glass-card max-w-md mx-auto">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <Icon
                      name="Shuffle"
                      size={64}
                      className="mx-auto text-primary"
                    />
                    <p className="text-muted-foreground">
                      Нажмите кнопку, чтобы создать случайный образ из вашего
                      гардероба
                    </p>
                    <Button
                      size="lg"
                      className="w-full gradient-bg"
                      onClick={generateRandomOutfit}
                    >
                      <Icon name="Shuffle" size={20} className="mr-2" />
                      Генерировать образ
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {(selectedOutfit.top ||
                selectedOutfit.bottom ||
                selectedOutfit.shoes) && (
                <Card className="glass-card max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle className="text-center">
                      Ваш случайный образ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedOutfit.top && (
                        <div className="text-center">
                          <img
                            src={selectedOutfit.top.image}
                            alt={selectedOutfit.top.name}
                            className="w-full h-32 object-cover rounded-md mb-2"
                          />
                          <p className="font-medium">
                            {selectedOutfit.top.name}
                          </p>
                        </div>
                      )}
                      {selectedOutfit.bottom && (
                        <div className="text-center">
                          <img
                            src={selectedOutfit.bottom.image}
                            alt={selectedOutfit.bottom.name}
                            className="w-full h-32 object-cover rounded-md mb-2"
                          />
                          <p className="font-medium">
                            {selectedOutfit.bottom.name}
                          </p>
                        </div>
                      )}
                      {selectedOutfit.shoes && (
                        <div className="text-center">
                          <img
                            src={selectedOutfit.shoes.image}
                            alt={selectedOutfit.shoes.name}
                            className="w-full h-32 object-cover rounded-md mb-2"
                          />
                          <p className="font-medium">
                            {selectedOutfit.shoes.name}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="wardrobe" className="space-y-8">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold font-montserrat">
                Ваш гардероб
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Здесь отображается вся ваша одежда. Добавляйте фотографии,
                создавайте теги и организуйте свой стиль.
              </p>

              <div className="flex justify-center gap-4 mb-8">
                <Button size="lg" className="gradient-bg">
                  <Icon name="Upload" size={20} className="mr-2" />
                  Добавить одежду
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Filter" size={20} className="mr-2" />
                  Фильтры
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[
                  ...sampleClothes.tops,
                  ...sampleClothes.bottoms,
                  ...sampleClothes.shoes,
                ].map((item) => (
                  <ClothingCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-8">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold font-montserrat">Избранное</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Сохраненные образы и любимые предметы одежды
              </p>

              {favorites.length === 0 ? (
                <Card className="glass-card max-w-md mx-auto">
                  <CardContent className="p-8">
                    <Icon
                      name="Heart"
                      size={64}
                      className="mx-auto text-muted-foreground mb-4"
                    />
                    <p className="text-muted-foreground">
                      Пока нет избранных предметов. Начните добавлять любимую
                      одежду!
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {[
                    ...sampleClothes.tops,
                    ...sampleClothes.bottoms,
                    ...sampleClothes.shoes,
                  ]
                    .filter((item) => favorites.includes(item.id.toString()))
                    .map((item) => (
                      <ClothingCard key={item.id} item={item} />
                    ))}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
