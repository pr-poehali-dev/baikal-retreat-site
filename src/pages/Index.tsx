import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-background overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/ca808c12-2254-4eec-8b58-25f941e8a850/files/2bab0ca2-c1d9-4678-a65f-f53c35f0f6a3.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6">
            Ретритный центр на Байкале
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Пространство для трансформации и гармонии с природой
          </p>
          <Button size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Забронировать ретрит
          </Button>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Преимущества для организаторов
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Всё необходимое для проведения йога-программ и ретритов разных направлений
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Mountain",
                title: "Уединённая локация",
                description: "Окружённый природой Байкала центр создаёт идеальные условия для медитации и практик"
              },
              {
                icon: "Users",
                title: "Готовая инфраструктура",
                description: "Залы для практик, комфортные номера, зоны для медитации — всё под ключ"
              },
              {
                icon: "Heart",
                title: "Энергия места",
                description: "Байкал — сакральное место силы, усиливающее эффект практик и трансформации"
              },
              {
                icon: "Utensils",
                title: "Питание включено",
                description: "Здоровое вегетарианское меню, адаптированное под йога-ретриты"
              },
              {
                icon: "Home",
                title: "Гибкие условия",
                description: "Варианты размещения от 10 до 30 человек, индивидуальный подход к каждой группе"
              },
              {
                icon: "Sparkles",
                title: "Поддержка 24/7",
                description: "Администратор центра всегда на связи для решения организационных вопросов"
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Инфраструктура центра
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { icon: "Home", title: "Главный зал для практик", text: "120 кв.м с видом на Байкал, деревянный пол, звуковая система" },
                { icon: "Flower2", title: "Медитационная комната", text: "Тихое пространство для индивидуальных практик и созерцания" },
                { icon: "Waves", title: "Баня на дровах", text: "Традиционная русская баня с выходом к озеру" },
                { icon: "Trees", title: "Открытая площадка", text: "Деревянный настил для практик на свежем воздухе" },
                { icon: "Coffee", title: "Общая зона", text: "Уютное пространство для чаепитий и общения" },
                { icon: "Bed", title: "Комфортные номера", text: "От 2 до 4 человек, натуральные материалы, все удобства" }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/ca808c12-2254-4eec-8b58-25f941e8a850/files/fa003fcd-c03f-4183-90fc-164409074a0a.jpg"
                alt="Инфраструктура центра"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Варианты размещения
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Выберите оптимальный вариант для вашей группы
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-6 text-lg font-semibold">Тип номера</th>
                  <th className="text-left py-4 px-6 text-lg font-semibold">Вместимость</th>
                  <th className="text-left py-4 px-6 text-lg font-semibold">Удобства</th>
                  <th className="text-right py-4 px-6 text-lg font-semibold">Цена/сутки</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Стандарт", capacity: "2 человека", amenities: "Душ, санузел", price: "3 500 ₽" },
                  { type: "Комфорт", capacity: "2 человека", amenities: "Душ, санузел, вид на озеро", price: "4 500 ₽" },
                  { type: "Семейный", capacity: "4 человека", amenities: "Душ, санузел, гостиная зона", price: "7 000 ₽" },
                  { type: "Эконом", capacity: "4 человека", amenities: "Общий санузел", price: "2 500 ₽" }
                ].map((room, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">{room.type}</td>
                    <td className="py-4 px-6 text-muted-foreground">{room.capacity}</td>
                    <td className="py-4 px-6 text-muted-foreground">{room.amenities}</td>
                    <td className="py-4 px-6 text-right font-semibold text-primary">{room.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            * Цены указаны за номер. В стоимость включено трёхразовое питание.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Отзывы участников
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Елена Соколова",
                role: "Организатор йога-туров",
                text: "Провела уже третий ретрит в этом центре. Участники в восторге от атмосферы и энергии места. Организация на высшем уровне!",
                rating: 5
              },
              {
                name: "Дмитрий Волков",
                role: "Инструктор по медитации",
                text: "Идеальное место для глубоких практик. Тишина, природа, комфорт — всё способствует трансформации сознания.",
                rating: 5
              },
              {
                name: "Анна Петрова",
                role: "Психолог",
                text: "Проводила 10-дневный ретрит для группы. Инфраструктура позволяет полностью сосредоточиться на программе, не отвлекаясь на быт.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-xl">{review.name}</CardTitle>
                  <CardDescription>{review.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Оставьте заявку, и мы свяжемся с вами в течение 24 часов для обсуждения деталей вашего ретрита
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">Республика Бурятия, побережье озера Байкал</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
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
              <div className="mt-8 relative h-64 rounded-xl overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/ca808c12-2254-4eec-8b58-25f941e8a850/files/a83eacbc-4e3a-4fb2-822c-9c32ab1ca3bd.jpg"
                  alt="Йога на Байкале"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Форма заявки</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашем ретрите: даты, количество участников, особые пожелания"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
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

      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ретритный центр на Байкале</h3>
          <p className="text-background/80 mb-6">Пространство для трансформации и гармонии</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
          </div>
          <p className="text-sm text-background/60">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
