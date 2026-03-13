import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage, AvatarBadge } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BadgeInfo, Settings, Heart, UserRoundPlus, UserRoundCheck, BookPlus, AtSign, PhoneIncoming, Send     } from 'lucide-react';
import Image from "next/image";

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default function Page() {
  return (
    
    <div className="grid justify-center pt-5 gap-5">
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
                <BookPlus strokeWidth={3} />8
              </CardTitle>
              <CardDescription className="text-center" >
                Публикации
              </CardDescription>
            </div>
            <div>
              <CardTitle className="flex justify-center gap-2 text-center items-center text-3xl font-semibold">
                <UserRoundPlus strokeWidth={3} />35
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
                <Heart strokeWidth={3} />394 
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
          <CardDescription className="grid gap-6 scroll-m-20 text-sm text-balance pl-8 pr-8" >
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
        <Card className="w-full max-w-7xl">
          
        </Card>
      </div>












    </div>

  );
}
