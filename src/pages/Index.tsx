import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    eventFormat: "",
    dates: "",
    contact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Helmet>
        <title>Ретритный центр на Байкале | Листвянка, Иркутск | Проведение ретритов и йога-программ</title>
        <meta name="description" content="Ретритный центр на Байкале в Листвянке. Пространство для йога-ретритов, психологических групп и трансформационных программ. 60 км от Иркутска, до 25 человек." />
        <meta name="keywords" content="ретритный центр Байкал, йога-ретрит Байкал, место для ретрита, ретритный центр Иркутск, проведение ретритов в России, Листвянка ретрит" />
      </Helmet>
      
      <div className="min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 via-background to-background overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://cdn.poehali.dev/projects/ca808c12-2254-4eec-8b58-25f941e8a850/files/2bab0ca2-c1d9-4678-a65f-f53c35f0f6a3.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.25
            }}
          />
          <div className="container mx-auto px-4 z-10 text-center animate-fade-in py-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Ретритный центр<br />на Байкале
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Пространство для ретритов, йоги и трансформационных программ в посёлке Листвянка
            </p>
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Запросить даты и условия
            </Button>
            <p className="text-muted-foreground mt-8 text-lg">
              60 км от Иркутска • До 25 человек • Место силы
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
              О центре
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground space-y-6 text-center leading-relaxed">
              <p className="text-xl">
                Это пространство создано для глубокой внутренней работы, групповых процессов и осознанного присутствия.
              </p>
              <p className="text-lg">
                Здесь нет суеты и отвлекающих факторов — только тишина природы, целительная энергия Байкала и продуманная инфраструктура для ваших программ.
              </p>
              <p className="text-lg">
                Мы заботимся о ведущих и создаём условия, в которых вы можете полностью сосредоточиться на своей работе, а участники — погрузиться в процесс трансформации.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Для кого это место
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
              Пространство подходит для профессионалов, работающих с глубинными процессами
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: "Sparkles",
                  title: "Организаторы ретритов",
                  description: "Для тех, кто создаёт трансформационные программы и пространства для изменений"
                },
                {
                  icon: "Heart",
                  title: "Преподаватели йоги",
                  description: "Инструкторы йоги, телесных и дыхательных практик"
                },
                {
                  icon: "Brain",
                  title: "Психологи и психотерапевты",
                  description: "Специалисты глубинной работы с группами и индивидуально"
                },
                {
                  icon: "Users",
                  title: "Тренеры и коучи",
                  description: "Ведущие обучающих и развивающих программ"
                },
                {
                  icon: "Smile",
                  title: "Спикеры",
                  description: "Авторы программ личностного и духовного роста"
                },
                {
                  icon: "Flame",
                  title: "Ведущие трансформационных программ",
                  description: "Создатели авторских методик и духовных практик"
                }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name={item.icon} className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Почему Байкал
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto leading-relaxed">
              Байкал — это не просто озеро. Это место силы, которое веками притягивает людей для восстановления, перезагрузки и обретения ясности
            </p>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    icon: "Waves",
                    title: "Энергия места",
                    text: "Байкал — древнейшее озеро планеты, сакральное пространство, усиливающее любые практики и намерения"
                  },
                  {
                    icon: "Wind",
                    title: "Тишина и чистота",
                    text: "Кристально чистый воздух, отсутствие городского шума, глубокая связь с природой"
                  },
                  {
                    icon: "Sparkles",
                    title: "Трансформация",
                    text: "Участники отмечают глубину погружения и силу изменений, которые здесь происходят"
                  },
                  {
                    icon: "Mountain",
                    title: "Доступность",
                    text: "Всего 60 км от Иркутска — сочетание уединения и удобной логистики"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-5 items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-secondary" size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
                <img
                  src="https://cdn.poehali.dev/projects/ca808c12-2254-4eec-8b58-25f941e8a850/files/2bab0ca2-c1d9-4678-a65f-f53c35f0f6a3.jpg"
                  alt="Озеро Байкал"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Инфраструктура и возможности
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
              Всё необходимое для проведения программ любого формата
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: "Home",
                  title: "Зал для практик",
                  description: "Просторный зал для йоги, медитаций, телесной и групповой работы"
                },
                {
                  icon: "Bed",
                  title: "Проживание на территории",
                  description: "9 номеров различной категории с общей вместимостью до 25 человек"
                },
                {
                  icon: "Trees",
                  title: "Природная территория",
                  description: "Прогулки, практики на свежем воздухе, созерцание Байкала"
                },
                {
                  icon: "Utensils",
                  title: "Осознанное питание",
                  description: "Вегетарианские и другие варианты меню по запросу"
                },
                {
                  icon: "Flame",
                  title: "Русская баня",
                  description: "Баня на дровах как элемент восстановления и очищения"
                },
                {
                  icon: "Navigation",
                  title: "Удобная логистика",
                  description: "60 км от Иркутска, около часа на автомобиле, организация трансфера"
                }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <Icon name={item.icon} className="text-primary" size={26} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Проживание и номера
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
              В центре 9 номеров с общей вместимостью до 25 человек. Гибкое размещение групп и отдельное проживание для ведущих
            </p>
            
            <div className="max-w-5xl mx-auto space-y-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-center">Номера категории «Люкс»</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: "«Морской»", capacity: "2 места" },
                    { name: "«Прованс»", capacity: "2 места + дополнительное" },
                    { name: "Люкс №2", capacity: "2 места + диван" },
                    { name: "Люкс №1", capacity: "3 раздельных спальных места" }
                  ].map((room, index) => (
                    <Card key={index} className="border-primary/30 hover:border-primary transition-colors">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center justify-between">
                          <span>{room.name}</span>
                          <Icon name="Star" className="text-secondary" size={20} />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <Icon name="Users" size={18} className="text-primary" />
                          {room.capacity}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-center">Номера категории «Стандарт»</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: "Стандарт №5", capacity: "2 места" },
                    { name: "Стандарт №3", capacity: "5 мест" },
                    { name: "Стандарт №7", capacity: "3 места" },
                    { name: "Стандарт №6", capacity: "3 места" },
                    { name: "Стандарт №4", capacity: "3 места" }
                  ].map((room, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{room.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground flex items-center gap-2">
                          <Icon name="Users" size={18} className="text-primary" />
                          {room.capacity}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground text-lg italic">
                Возможность гибкого размещения групп и отдельного проживания ведущих
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Форматы мероприятий
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: "Flower2", title: "Йога-ретриты", desc: "Практики хатха, виньяса, инь, кундалини йоги" },
                { icon: "Brain", title: "Психологические группы", desc: "Терапевтические и развивающие программы" },
                { icon: "GraduationCap", title: "Обучающие программы", desc: "Тренинги, семинары, интенсивы" },
                { icon: "Hand", title: "Телесные практики", desc: "Соматика, танец, движение, дыхание" },
                { icon: "Sparkles", title: "Духовные практики", desc: "Медитации, ритуалы, церемонии" },
                { icon: "Lightbulb", title: "Авторские проекты", desc: "Трансформационные программы любого формата" }
              ].map((format, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${index * 0.08}s` }}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name={format.icon} className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-xl">{format.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{format.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Поддержка организаторов
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
              Мы — ваш партнёр в создании пространства для трансформации
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: "Handshake",
                  title: "Партнёрский подход",
                  text: "Работаем с вниманием к вашим задачам и особенностям программы"
                },
                {
                  icon: "LayoutDashboard",
                  title: "Организация пространства",
                  text: "Помогаем подготовить залы и территорию под ваши нужды"
                },
                {
                  icon: "MapPin",
                  title: "Консультации по логистике",
                  text: "Подробная информация о заезде, маршрутах, особенностях локации"
                },
                {
                  icon: "Bus",
                  title: "Помощь с трансфером",
                  text: "Организация трансфера для групп по запросу"
                }
              ].map((support, index) => (
                <div key={index} className="flex gap-5 items-start p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={support.icon} className="text-primary" size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{support.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{support.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Отзывы
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Ирина Волкова",
                  role: "Организатор йога-ретритов",
                  text: "Провела уже второй ретрит в этом центре. Энергия места, тишина и забота администраторов создают идеальные условия для работы. Участники отмечают глубину погружения."
                },
                {
                  name: "Андрей Ковалёв",
                  role: "Психолог, ведущий групп",
                  text: "Байкал усиливает любую практику. Здесь люди открываются по-особенному. Инфраструктура продумана, можно полностью сосредоточиться на программе."
                },
                {
                  name: "Мария Светлова",
                  role: "Преподаватель хатха-йоги",
                  text: "Это место, куда хочется возвращаться. Природа, поддержка команды центра, уют номеров — всё на высоком уровне. Рекомендую коллегам."
                },
                {
                  name: "Дмитрий Соколов",
                  role: "Коуч, тренер",
                  text: "Удобная логистика от Иркутска, гибкие условия размещения. Организаторам здесь комфортно работать, а участники уезжают с благодарностью."
                },
                {
                  name: "Елена Морозова",
                  role: "Инструктор телесных практик",
                  text: "Байкал — это магия. Центр даёт возможность погрузиться в процесс без лишних забот. Всё работает, всё продумано."
                },
                {
                  name: "Ольга Кузнецова",
                  role: "Ведущая трансформационных программ",
                  text: "Искала место для авторской программы — и нашла. Пространство поддерживает глубинные процессы. Буду проводить здесь программы регулярно."
                }
              ].map((review, index) => (
                <Card key={index} className="animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.08}s` }}>
                  <CardHeader>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription className="text-sm">{review.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic leading-relaxed">"{review.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Контакты и заявка
                </h2>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                  Оставьте заявку — мы свяжемся с вами, расскажем подробности, обсудим даты и условия для вашей программы
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                      <p className="text-muted-foreground">Иркутская область, посёлок Листвянка, озеро Байкал</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Телефон / WhatsApp</h3>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">info@baikal-retreat.ru</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-72 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://cdn.poehali.dev/projects/ca808c12-2254-4eec-8b58-25f941e8a850/files/fa003fcd-c03f-4183-90fc-164409074a0a.jpg"
                    alt="Интерьер центра"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Форма заявки</CardTitle>
                  <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventFormat">Формат мероприятия *</Label>
                      <Input
                        id="eventFormat"
                        placeholder="Например: йога-ретрит, психологическая группа"
                        value={formData.eventFormat}
                        onChange={(e) => setFormData({ ...formData, eventFormat: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dates">Примерные даты *</Label>
                      <Input
                        id="dates"
                        placeholder="Например: июнь 2024, 7-10 дней"
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact">Контакт (WhatsApp / Telegram) *</Label>
                      <Input
                        id="contact"
                        placeholder="+7 (999) 123-45-67 или @username"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <footer className="py-16 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-3">Ретритный центр на Байкале</h3>
              <p className="text-background/80 mb-3 text-lg">Листвянка, Иркутская область</p>
              <p className="text-background/70 mb-8">Пространство для трансформации и глубокой работы</p>
              
              <div className="flex justify-center gap-6 mb-8">
                <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                  <Icon name="Instagram" size={26} />
                </a>
                <a href="#" className="hover:text-secondary transition-colors" aria-label="WhatsApp">
                  <Icon name="MessageCircle" size={26} />
                </a>
                <a href="tel:+79991234567" className="hover:text-secondary transition-colors" aria-label="Телефон">
                  <Icon name="Phone" size={26} />
                </a>
              </div>
              
              <div className="border-t border-background/20 pt-6">
                <p className="text-sm text-background/60">© 2024 Ретритный центр на Байкале. Все права защищены</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
