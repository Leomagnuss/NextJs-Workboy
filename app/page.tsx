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
import { BadgeInfo, Settings  } from 'lucide-react';
import Image from "next/image";

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default function Page() {
  return (
    
    <div className="flex justify-center pt-5">
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
              <CardDescription>Сотрудник поддержки L2, качественная поддержка и администрирование сервисов, диагностика и обслуживание. </CardDescription>
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
    </div>

  );
}
