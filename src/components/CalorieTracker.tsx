import CalorieDisplay from "./CalorieDisplay"
import { useActivity } from "../hooks/useActivity"


const CalorieTracker = () => {


    const {caloriesConsumed, caloriesBurned, netCalories } = useActivity()

    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">
                Resumen de Calorias
            </h2>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CalorieDisplay calories={caloriesConsumed} text="Consumidas" />
                <CalorieDisplay calories={caloriesBurned} text="Ejercicio" />
                <CalorieDisplay calories={netCalories} text="Totales" />
            </div>
        </>
  );
}

export default CalorieTracker