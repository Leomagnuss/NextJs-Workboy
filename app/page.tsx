"use client"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Avatar, AvatarFallback, AvatarImage, AvatarBadge } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BadgeInfo, Settings, Heart, UserRoundPlus, UserRoundCheck, BookPlus, AtSign, PhoneIncoming, Send, ScanEye  } from 'lucide-react';
import Image from "next/image";
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

import { Separator } from "@/components/ui/separator"

import * as React from "react"
  




export default function Page() {

  const [OpenPost3, setOpenPost3] = React.useState(false)

  return (
    
    <div className="grid justify-center pt-5 gap-5">
      <div className="flex gap-2"><ScanEye size={40} /> <h1 className="text-4xl font-medium">Unbounded Emploee</h1></div>
      <Card className="w-full max-w-7xl shadow p-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-8">
            <Avatar className="shadow size-25">
              <AvatarImage src="https://avatars.githubusercontent.com/u/170928669?v=4"/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid content-between gap-1">
              <div className="flex gap-2 ">
                <CardTitle className="">
                  Соколов Никита
                </CardTitle>
                <CardDescription >
                  @Leomagnuss
                </CardDescription>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">
                  Online
                </Badge>
              </div>
              <div>
                  <Badge variant="outline"><BadgeInfo />Специалист поддержки</Badge>
              </div>
              <CardDescription className="scroll-m-20 text-sm text-balance">Сотрудник поддержки L2, качественная поддержка и администрирование сервисов, диагностика и обслуживание. </CardDescription>
            </div>
            <div className="flex flex-col items-start gap-8">
            <ButtonGroup>
              <Button variant="outline" className="cursor-pointer" size="sm">
                Редактировать профиль
              </Button>
              <Button variant="outline" className="cursor-pointer" size="sm">
                Поделиться
              </Button>
              <Button variant="outline" className="cursor-pointer" size="sm">
                Настройки <Settings />
              </Button>
            </ButtonGroup>
            
            </div>
          </div>
        </div>
      </Card>
      <div className="">
        <Card className="w-full p-5 shadow">
          <div className="flex justify-around">
            <div>
              <CardTitle className="flex justify-center gap-2 text-center items-center text-3xl font-semibold">
                <BookPlus strokeWidth={3} />4
              </CardTitle>
              <CardDescription className="text-center" >
                Публикации
              </CardDescription>
            </div>
            <div>
              <CardTitle className="flex justify-center gap-2 text-center items-center text-3xl font-semibold">
                <UserRoundPlus strokeWidth={3} />12
              </CardTitle>
              <CardDescription className="text-center" >
                Подписчики
              </CardDescription>
            </div>
            <div>
              <CardTitle className="flex justify-center gap-2 text-center items-center text-3xl font-semibold">
                <UserRoundCheck strokeWidth={3} />19
              </CardTitle>
              <CardDescription className="text-center" >
                Подписки
              </CardDescription>
            </div>
            <div>
              <CardTitle className="flex justify-center gap-2 text-center items-center text-3xl font-semibold">
                <Heart strokeWidth={3} />49 
              </CardTitle>
              <CardDescription className="text-center" >
                Лайки
              </CardDescription>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex gap-5">
        <Card className=" w-xl shadow pt-8">
          <CardTitle className=" font-semibold pl-8 pr-8">
            О себе
          </CardTitle>
          <CardDescription className="grid gap-3 scroll-m-20 text-sm text-balance pl-8 pr-8" >
            <p>
              Основное направление: оказание технической поддержки сотрудникам, вторая линия поддержки, 
              решение инцидентов связанных с предоставлением прямых и удаленных доступов.
            </p> 
            <p>
              Администрирование Active directory.
              Администрирование терменальных серверов, информационных систем, файловых хранилищ и принтсерверов.
              Установка, настрйока и сопровождение ПО.
            </p> 
            <p>
              Коммутация сотрудников, резервация адресов.
            </p>
            <p>
              Обслуживание, диагностика и малый ремонт
              основных средств, периферии и оргтехники. <br />
              Ведение учета и движение техники, ведение проекта по инвентаризации и списаниям. 
              Составление инструкций, обучение новых сотрудников, подготовка техники и консультации по всем перечисленным пунктам. 
            </p>
            <p>
              Решение инцидентов связанных с полиграфией, изображениями, дизайном и логотипами.
            </p>
          </CardDescription>
          <div className=" flex flex-wrap gap-2 pl-8 pr-8">
            <Badge variant="secondary">Active directory</Badge>
            <Badge variant="secondary">SQL</Badge>
            <Badge variant="secondary">Windows 7-11</Badge>
            <Badge variant="secondary">Windows Server</Badge>
            <Badge variant="secondary">DHCP</Badge>
            <Badge variant="secondary">1С МДМ</Badge>
            <Badge variant="secondary">1С УХ</Badge>
            <Badge variant="secondary">Adobe</Badge>
            <Badge variant="secondary">Figma</Badge>
            <Badge variant="secondary">Photoshop</Badge>
          </div>
          <CardFooter className="grid gap-2 w-full font-semibold ">
            <CardTitle className="font-semibold pl-4">
              <p>Контакты</p>
            </CardTitle>
            <CardContent className="flex gap-2 content-center text-xs items-center">
              <PhoneIncoming  className="size-4"/>+7 906 747 47 60
            </CardContent>
            <CardContent className="flex gap-2 content-center text-xs items-center">
              <AtSign className="size-4"/>na.sokolov@jsa-group.ru
            </CardContent>
            <CardContent className="flex gap-2 content-center text-xs items-center">
              <Send  className="size-4"/>@leomagnuss
            </CardContent>
          </CardFooter>
        </Card>

        <Card className="w-full max-w-7xl p-8">
              <Tabs defaultValue="overview" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="posts">Все посты</TabsTrigger>
        <TabsTrigger value="media">Медиа</TabsTrigger>
        <TabsTrigger value="documents">Документы</TabsTrigger>
        <TabsTrigger value="saved">Избранное</TabsTrigger>
      </TabsList>
      <TabsContent value="posts" className="grid pt-5 gap-3">

        <Card>
          <CardHeader>
            <CardTitle className="flex gap-2 ">О вреде ведения локальных справочников ИС <Avatar className="shadow size-5"><AvatarImage src="https://avatars.githubusercontent.com/u/170928669?v=4"/><AvatarFallback>CN</AvatarFallback></Avatar></CardTitle>
            <CardDescription>
              Очевидно, что единый реестр систем - важная составляющая их грамотного учета, быстрый доступ к актуальной информации является одним из трех слонов на пути к выполнению KPI. 
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between h-12 text-xs text-muted-foreground">
            <div>04/12/2025</div>
            <div className="flex gap-1">
              <Button variant="outline" className="gap-1 w-16 text-[16px]"><Send className="size-5"/>5</Button>
              <Button variant="outline" className="gap-1 w-16 text-[16px]"><Heart className="size-5"/>11</Button>  
            </div> 
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex gap-2 ">Работа по ночам, хорошо или плохо?<Avatar className="shadow size-5"><AvatarImage src="https://avatars.githubusercontent.com/u/170928669?v=4"/><AvatarFallback>CN</AvatarFallback></Avatar></CardTitle>
            <CardDescription className="grid">
               Каждый день мы в течении дня выполняем те или иные задачи. Работы много, а времени на все мало, некоторые дела откладываются на потом, некоторые из за срочности необходимо выполнить здесь и сейчас, однако во многих компаниях сотрудники не могут задерживаться в офисе дольше времени работы центра и приходиться брать работу на дом.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between h-12 text-xs text-muted-foreground">
            <div>01/12/2025</div>
            <div className="flex gap-1">
              <Button variant="outline" className="gap-1 w-16 text-[16px]"><Send className="size-5"/>2</Button>
              <Button variant="outline" className="gap-1 w-16 text-[16px]"><Heart className="size-5"/>8</Button>  
            </div> 
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex gap-2 ">Сегодняшний кейс мог уйти в архив с статусом «Не воспроизводится». <Avatar className="shadow size-5"><AvatarImage src="https://avatars.githubusercontent.com/u/170928669?v=4"/><AvatarFallback>CN</AvatarFallback></Avatar></CardTitle>
            <CardDescription className="grid">
              Я залез в логи, прогнал запросы через базу, нашел редкое условие гонки данных. Ошибка всплывала раз в 100 случаев.
Потратил 3 часа, но мы нашли причину. Передали патч. <br/>
Нет ничего приятнее, чем превратить «у вас всё плохо» в «спасибо, вы спасли наш день».
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between h-12 text-xs text-muted-foreground">
            <div>27/11/2025</div>
            <div className="flex gap-1">
              <Button variant="outline" className="gap-1 w-16 text-[16px]"><Send className="size-5"/>6</Button>
              <Button variant="outline" className="gap-1 w-16 text-[16px]"><Heart className="size-5"/>16</Button>  
            </div> 
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex gap-2 ">За каждым тикетом стоит живой человек, у которого горят сроки. <Avatar className="shadow size-5"><AvatarImage src="https://avatars.githubusercontent.com/u/170928669?v=4"/><AvatarFallback>CN</AvatarFallback></Avatar></CardTitle>
            
            <CardDescription>
Иногда нужно не просто дать инструкцию, а сказать: «Я понимаю, что это критично. Я уже занимаюсь этим приоритетно».
Технические навыки важны, но умение сохранить холодную голову и поддержать человека в стрессе — это то, что отличает хорошую поддержку от отличной.

            </CardDescription>
  
          </CardHeader>
          <CardFooter className="flex justify-between h-12 text-xs text-muted-foreground">
            <div>21/11/2025</div>
            <div className="flex gap-1">
              <Button variant="outline" className="gap-1 w-16 text-[16px]"><Send className="size-5"/>7</Button>
              <Button variant="outline" className="gap-1 w-16 text-[16px]"><Heart className="size-5"/>14</Button>  
            </div> 
          </CardFooter>
        </Card>


        


      </TabsContent>
      <TabsContent value="media" className="grid pt-5 gap-3">

        <Card>
          <CardHeader>
            <CardTitle>Обновление безопасности: критические патчи этого месяца</CardTitle>
            <CardDescription className="grid gap-2">
              В этом месяце вендоры выпустили срочные обновления безопасности:
              <ul className="list-disc pl-4">
                <li>Windows: исправлены уязвимости в Print Spooler и Kerberos - CVE-2024-XXXX</li>
                <li>Chrome/Edge: обновите браузеры — устранена критическая уязвимость типа Use-After-Free</li>
                <li>OpenSSL: рекомендуем проверить серверы на актуальность версии 3.0.13+</li>
              </ul>
              Что делать специалистам поддержки:
              <ul className="list-decimal pl-4">
                <li>Проверить, установлены ли патчи на рабочих станциях пользователей.</li>
                <li>При эскалации от L1 уточнять версию ОС/браузера.</li>
                <li>Напомнить пользователям о важности перезагрузки после обновлений.</li>
              </ul>
            </CardDescription>
          </CardHeader>
          <CardFooter className="text-sm text-muted-foreground">
            15/12/2025
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Новые функции в Microsoft Teams: что изменилось для поддержки</CardTitle>
            <CardDescription className="grid gap-2">
              В последнем апдейте Teams появились фичи, полезные для поддержки:
              <ul className="list-disc pl-4">
                <li>Встроенный сбор логов: теперь можно выгрузить диагностические данные прямо из чата с пользователем.</li>
                <li>Улучшенный поиск по истории: фильтры по дате, типу файла и участнику ускорят расследование инцидентов.</li>
                <li>Шаблоны ответов для админов: можно создать библиотеку готовых решений для типовых запросов.</li>
              </ul>
            </CardDescription>
          </CardHeader>
          <CardFooter className="text-sm text-muted-foreground">
            08/10/2025
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Напоминаем о приближающихся End of Life:</CardTitle>
            <CardDescription className="grid gap-2">
              <ul>
                <li>❌ Windows 10 21H2 — поддержка заканчивается 14 мая 2024.</li>
                <li>❌ Office 2016 — последние обновления безопасности выйдут в октябре.</li>
                <li>❌ Python 3.7 — больше не получает патчей безопасности.</li>
              </ul>
            </CardDescription>
          </CardHeader>
          <CardFooter className="text-sm text-muted-foreground">
            27/03/2024
          </CardFooter>
        </Card>

      </TabsContent>



      <TabsContent value="documents" className="grid pt-5 gap-3">



        <Card>
          <CardHeader>
            <CardTitle>Базовая документация для онбординга новичка в L2</CardTitle>
            <CardDescription className="grid gap-2">
              <ul className="list-disc pl-4">
                <li className="hover:underline cursor-help">Runbook по эскалации — когда и как передавать тикет на L3/разработчикам.</li>
                <li className="hover:underline cursor-help">Гайд по сбору логов — инструкции для Windows, Linux, веб-приложений и мобильных клиентов.</li>
                <li className="hover:underline cursor-help">База знаний - KB, по типовым инцидентам — решения для 80% повторяющихся проблем.</li>
                <li className="hover:underline cursor-help">Схема архитектуры системы — визуальная карта сервисов, баз данных и точек интеграции.</li>
                <li className="hover:underline cursor-help">Чек-лист проверки доступа — права в AD, VPN, SSO, ролевая модель в приложении.</li>
                <li className="hover:underline cursor-help">Шпаргалка по командам — полезные CLI-команды, SQL-запросы, API-эндпоинты для диагностики.</li>
              </ul>
            </CardDescription>
          </CardHeader>
          <CardFooter className="text-sm h-5 text-muted-foreground">
            25/09/2025
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Документы по безопасности и комплаенсу</CardTitle>
            <CardDescription className="grid gap-2">
              <ul className="list-disc pl-4">
                <li className="hover:underline cursor-help">Политика обработки персональных данных — что можно/нельзя делать с данными пользователей.</li>
                <li className="hover:underline cursor-help">Инструкция по реагированию на утечки — алгоритм действий при подозрении на компрометацию.</li>
                <li className="hover:underline cursor-help">Реестр учётных записей с повышенными правами — кто имеет доступ к продакшену и критическим системам.</li>
                <li className="hover:underline cursor-help">Чек-лист аудита доступа — периодическая проверка прав сотрудников и сервисных аккаунтов.</li>
                <li className="hover:underline cursor-help">Гайд по безопасной передаче данных — как отправлять логи/дампы без нарушения политик.</li>
                <li className="hover:underline cursor-help">Шаблон отчёта для SOC/InfoSec — формат передачи информации о подозрительной активности.</li>
              </ul>
            </CardDescription>
          </CardHeader>
          <CardFooter className="text-sm h-5 text-muted-foreground">
            25/09/2025
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Документы для расследования инцидента</CardTitle>
            <CardDescription className="grid gap-2">
              <ul className="list-disc pl-4">
                <li className="hover:underline cursor-help">Шаблон отчёта об инциденте — структура: симптомы, шаги воспроизведения, логи, гипотезы, решение.</li>
                <li className="hover:underline cursor-help">Матрица приоритетов *SLA — как определять Severity и сроки реакции.</li>
                <li className="hover:underline cursor-help">Контакты экстренной эскалации — кто и когда подключается (дежурный админ, DevOps, вендор).</li>
                <li className="hover:underline cursor-help">Диагностический чек-лист — пошаговый алгоритм: от проверки сети до анализа БД.</li>
                <li className="hover:underline cursor-help">Инструкция по изоляции проблемы — как сузить круг: клиент/сеть/сервер/код.</li>
                <li className="hover:underline cursor-help">Форма post-mortem — документ для разбора корневых причин после решения критического инцидента.</li>
              </ul>
            </CardDescription>
          </CardHeader>
          <CardFooter className="text-sm h-5 text-muted-foreground">
            25/09/2025
          </CardFooter>
        </Card>

      </TabsContent>


      <TabsContent value="saved" className="grid pt-5 gap-3">
        
        
        <Card>
          <CardHeader>
            <CardTitle>Системы и полезности</CardTitle>
            <CardDescription className="grid gap-2">
              <ul>
                <li className="hover:underline cursor-help">Дашборд мониторинга</li>
                <li className="hover:underline cursor-help">Шпаргалка по быстрым командам</li>
                <li className="hover:underline cursor-help">База известных ошибок (Known Errors)</li>
                <li className="hover:underline cursor-help">Тестовый стенд</li>
                <li className="hover:underline cursor-help">Принтсервер</li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Номера</CardTitle>
            <CardDescription className="grid gap-2">
              <ul>
                <li className="hover:underline cursor-help">6256 - DevOps</li>
                <li className="hover:underline cursor-help">6965 - ИБ</li>
                <li className="hover:underline cursor-help">5556 5557 5558 - Диспетчера</li>
                <li className="hover:underline cursor-help">7887 - Дежурный администратор</li>
                <li className="hover:underline cursor-help">6851 7888 - Поддержка SAP</li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
        </Card>

        
      </div >
      
    <div className="grid gap-2 bottom-0 pb-4">
      <div className="flex gap-2 items-center">
      <ScanEye size={25} />
      <h1 className="text-[12px]">© 2026 Unbounded Emploee. Все права защищены</h1>
      </div>
      <Separator className="bg-gray-400" />
      <div className="flex justify-between">
        <ul className="flex gap-2 text-[12px]">
          <li className="hover:underline"><Link href="/">О нас</Link></li>
          <li className="hover:underline"><Link href="/">Поддержка</Link></li>
          <li className="hover:underline"><Link href="/">Блог</Link></li>
          <li className="hover:underline"><Link href="/">Вакансии</Link></li>
        </ul>
        <ul className="flex gap-2 text-[12px]">
          <li className="hover:underline"><Link href="/">Конфиденциальность</Link></li>
          <li className="hover:underline"><Link href="/">Условия использования</Link></li>
        </ul>
      </div>
    </div>

    </div>

  );
}
