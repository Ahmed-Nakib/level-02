// conditional type : je type condition er upor nirvorsheel


type A = null;
type B = undefined;

// type C = A extends null ? true : false;

type C = A extends Number ? true : B extends undefined ? true : false;

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
}


type CheckVehicle<T> = T extends 'bike' | 'car' | 'ship' ? true : false;

type HasBike = CheckVehicle<"ship">;