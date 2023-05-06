import React,{ useEffect} from 'react'
import { beer, details } from '../redux/cervezasActions'
import { useDispatch, useSelector } from 'react-redux'

export default function TableBeer() {
    const cervezas = useSelector((state) => state.cervezas.cervezas)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(beer())
    }, [dispatch])

  return (
    <div>
    {Array.isArray(cervezas) && (
        <table className="table-auto border-collapse border-3 border-stone-100">
          <thead>
            <tr>
              <td className="px-4 py-2">Nombre</td>
              <td className="px-4 py-2">IBU</td>
              <td className="px-4 py-2">ABV</td>
              <td className="px-4 py-2">Cervecería</td>
            </tr>
          </thead>
          <tbody>
            {cervezas.map((cerveza) => (
              <tr key={cerveza.id} className="border-4 border-stone-100">
                <td className="px-4 py-2">{cerveza.name}</td>
                <td className="px-4 py-2">{cerveza.ibu}</td>
                <td className="px-4 py-2">{cerveza.abv}</td>
                <td className="px-4 py-2">{cerveza.cerveceria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>
      
  )
}
