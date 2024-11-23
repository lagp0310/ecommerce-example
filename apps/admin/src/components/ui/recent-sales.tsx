import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-start flex-wrap justify-start">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 flex flex-1 flex-col sm:flex-row gap-y-1 sm:justify-start">
          <div className="flex flex-1 flex-col">
            <p className="text-sm font-medium leading-none mb-2">Jackson Lee</p>
            <p className="text-sm text-muted-foreground mb-2">
              jackson.lee@email.com
            </p>
          </div>
          <div className="font-medium flex flex-1 sm:justify-end sm:self-center">
            $39.00
          </div>
        </div>
      </div>
      <div className="flex items-start flex-wrap justify-start">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 flex flex-1 flex-col sm:flex-row gap-y-1 sm:justify-start">
          <div className="flex flex-1 flex-col">
            <p className="text-sm font-medium leading-none mb-2">Jackson Lee</p>
            <p className="text-sm text-muted-foreground mb-2">
              jackson.lee@email.com
            </p>
          </div>
          <div className="font-medium flex flex-1 sm:justify-end sm:self-center">
            $39.00
          </div>
        </div>
      </div>
      <div className="flex items-start flex-wrap justify-start">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 flex flex-1 flex-col sm:flex-row gap-y-1 sm:justify-start">
          <div className="flex flex-1 flex-col">
            <p className="text-sm font-medium leading-none mb-2">Jackson Lee</p>
            <p className="text-sm text-muted-foreground mb-2">
              jackson.lee@email.com
            </p>
          </div>
          <div className="font-medium flex flex-1 sm:justify-end sm:self-center">
            $39.00
          </div>
        </div>
      </div>
      <div className="flex items-start flex-wrap justify-start">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 flex flex-1 flex-col sm:flex-row gap-y-1 sm:justify-start">
          <div className="flex flex-1 flex-col">
            <p className="text-sm font-medium leading-none mb-2">Jackson Lee</p>
            <p className="text-sm text-muted-foreground mb-2">
              jackson.lee@email.com
            </p>
          </div>
          <div className="font-medium flex flex-1 sm:justify-end sm:self-center">
            $39.00
          </div>
        </div>
      </div>
      <div className="flex items-start flex-wrap justify-start">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 flex flex-1 flex-col sm:flex-row gap-y-1 sm:justify-start">
          <div className="flex flex-1 flex-col">
            <p className="text-sm font-medium leading-none mb-2">Jackson Lee</p>
            <p className="text-sm text-muted-foreground mb-2">
              jackson.lee@email.com
            </p>
          </div>
          <div className="font-medium flex flex-1 sm:justify-end sm:self-center">
            $39.00
          </div>
        </div>
      </div>
    </div>
  );
}
