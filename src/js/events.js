import { Matriz, Integer } from 'utilities-library'
import { messageSwal, promptSwal, confirDelete, check } from './alertSwal.js'
import botones from './components.js'

const { textBox1, textBox2, textBox3 } = botones

let m1 = new Matriz()
let m2 = new Matriz()
let m3 = new Matriz()

let n1 = new Integer()

botones.Cargar1.addEventListener('click', () => {
  m1 = new Matriz()

  const nroFilas = botones.inputNroFilas.value
  const nroColumnas = botones.inputNroColumnas.value
  const inicio = botones.inputInicial.value
  const final = botones.inputFinal.value

  m1.cargar(
    parseInt(nroFilas),
    parseInt(nroColumnas),
    parseInt(inicio),
    parseInt(final)
  )
})

botones.Descargar1.addEventListener('click', () => {
  textBox1.value = m1.descargar()
})

botones.CargarSerieArit.addEventListener('click', async () => {
  m1 = new Matriz()

  const result1 = await promptSwal('Filas')
  if (!result1.isConfirmed) return
  const result2 = await promptSwal('Columnas')
  if (!result2.isConfirmed) return
  const result3 = await promptSwal('Valor inicial')
  if (!result3.isConfirmed) return
  const result4 = await promptSwal('La razón')
  if (!result4.isConfirmed) return

  const nroFila = Number(result1.value)
  const nroColumna = Number(result2.value)
  const a1 = Number(result3.value)
  const r = Number(result4.value)

  m1.cargarSerieAritmetica(nroFila, nroColumna, a1, r)
})

botones.CargarSerieGeo.addEventListener('click', async () => {
  m1 = new Matriz()

  const result1 = await promptSwal('Filas')
  if (!result1.isConfirmed) return
  const result2 = await promptSwal('Columnas')
  if (!result2.isConfirmed) return
  const result3 = await promptSwal('Valor inicial')
  if (!result3.isConfirmed) return
  const result4 = await promptSwal('La razón geometrica')
  if (!result4.isConfirmed) return

  const nroFila = Number(result1.value)
  const nroColumna = Number(result2.value)
  const a1 = Number(result3.value)
  const r = Number(result4.value)

  m1.cargarSerieGeometrica(nroFila, nroColumna, a1, r)
})

botones.Pertenencia.addEventListener('click', async () => {
  const result = await promptSwal('Numero')
  if (!result.isConfirmed) return
  const numero = Number(result.value)

  messageSwal(`${m1.pertenencia(numero)}`)
})

botones.VerificarOrdenado.addEventListener('click', () => {
  messageSwal(`${m1.verificarOrdenado()}`)
})

botones.VerificarIguales.addEventListener('click', () => {
  messageSwal(`${m1.verificarTodosIguales()}`)
})

botones.VerificarDiferentes.addEventListener('click', () => {
  messageSwal(`${m1.verificarTodosDiferentes()}`)
})

botones.MultiplicarEscalar.addEventListener('click', async () => {
  const result = await promptSwal('Escalar')
  if (!result.isConfirmed) return
  const escalar = Number(result.value)
  m1.multiplicacionPorEscalar(escalar)
  textBox2.value = m1.descargar()
})

botones.Transpocicion.addEventListener('click', () => {
  m1.transposicion()
  textBox2.value = m1.descargar()
})

botones.Frecuencia.addEventListener('click', async () => {
  const result = await promptSwal('Numero')
  if (!result.isConfirmed) return
  const numero = Number(result.value)
  messageSwal(`${m1.frecuencia(numero)}`)
})

botones.Ordenar.addEventListener('click', () => {
  m1.ordenar()
  textBox2.value = m1.descargar()
})

botones.Segmentar.addEventListener('click', () => {
  n1 = new Integer()
  m1.segmentar(n1.verificarPar)
  textBox2.value = m1.descargar()
})

botones.Intercalar.addEventListener('click', () => {
  n1 = new Integer()
  m1.intercalar(n1.verificarPrimo)
  textBox2.value = m1.descargar()
})

botones.AñadirColMayorFrecYFrec.addEventListener('click', () => {
  m1.añadirColumnaMayorFrecuenciaYFrecuencia()
  textBox2.value = m1.descargar()
})

botones.AñadirColMenorFrecYFrec.addEventListener('click', () => {
  m1.añadirColumnaMenorFrecuenciaYFrecuencia()
  textBox2.value = m1.descargar()
})

botones.AñadirColSuma.addEventListener('click', () => {
  m1.añadirColumnaSuma()
  textBox2.value = m1.descargar()
})

botones.AñadirColPar.addEventListener('click', () => {
  m1.añadirColumnaPares()
  textBox2.value = m1.descargar()
})

botones.AñadirColPrim.addEventListener('click', () => {
  m1.añadirColumnaPrimos()
  textBox2.value = m1.descargar()
})

botones.AñadirColCap.addEventListener('click', () => {
  m1.añadirColumnaCapicuas()
  textBox2.value = m1.descargar()
})

botones.AñadirColFib.addEventListener('click', () => {
  m1.añadirColumnaNoFibonaccis()
  textBox2.value = m1.descargar()
})

botones.AñadirColDif.addEventListener('click', () => {
  m1.añadirColumnaElementosDiferentes()
  textBox2.value = m1.descargar()
})

botones.AñadirColUnic.addEventListener('click', () => {
  m1.añadirColumnaElementosUnicos()
  textBox2.value = m1.descargar()
})

botones.AñadirFilMayorFrecYFrec.addEventListener('click', () => {
  m1.añadirFilaMayorFrecuenciaYFrecuencia()
  textBox2.value = m1.descargar()
})

botones.AñadirFilMenorFrecYFrec.addEventListener('click', () => {
  m1.añadirFilaMenorFrecuenciaYFrecuencia()
  textBox2.value = m1.descargar()
})

botones.AñadirFilSum.addEventListener('click', () => {
  m1.añadirFilaSuma()
  textBox2.value = m1.descargar()
})

botones.AñadirFilPar.addEventListener('click', () => {
  m1.añadirFilaPares()
  textBox2.value = m1.descargar()
})

botones.AñadirFilPrim.addEventListener('click', () => {
  m1.añadirFilaPrimos()
  textBox2.value = m1.descargar()
})

botones.AñadirFilCap.addEventListener('click', () => {
  m1.añadirFilaCapicuas()
  textBox2.value = m1.descargar()
})

botones.AñadirFilFib.addEventListener('click', () => {
  m1.añadirFilaFibonaccis()
  textBox2.value = m1.descargar()
})

botones.AñadirFilDif.addEventListener('click', () => {
  m1.añadirFilaElementosDiferentes()
  textBox2.value = m1.descargar()
})

botones.AñadirFilUnic.addEventListener('click', () => {
  m1.añadirFilaElementosUnicos()
  textBox2.value = m1.descargar()
})

botones.OrdernarDiagPrincial.addEventListener('click', () => {
  m1.ordenarDiagonalPrincipal()
  textBox2.value = m1.descargar()
})

botones.OrdenarDiagSecundaria.addEventListener('click', () => {
  m1.ordenarDiagonalSecundaria()
  textBox2.value = m1.descargar()
})

botones.SegTrianSupIzq.addEventListener('click', () => {
  n1 = new Integer()
  m1.segmentarTriangularSuperiorIzquierda(n1.verificarPar)
  textBox2.value = m1.descargar()
})

botones.SegTrianSupDer.addEventListener('click', () => {
  n1 = new Integer()
  m1.segmentarTriangularSuperiorDerecha(n1.verificarPrimo)
  textBox2.value = m1.descargar()
})

botones.SegTrianInfIzq.addEventListener('click', () => {
  n1 = new Integer()
  m1.segmentarTriangularSuperiorIzquierda(n1.verificarCapicua)
  textBox2.value = m1.descargar()
})

botones.SegTrianInfDer.addEventListener('click', () => {
  n1 = new Integer()
  m1.segmentarTriangularSuperiorIzquierda(n1.verificarFibonacci)
  textBox2.value = m1.descargar()
})

botones.IntTrianSupIzq.addEventListener('click', () => {
  n1 = new Integer()
  m1.intercalarTriangularSuperiorIzquierda(n1.verificarPar)
  textBox2.value = m1.descargar()
})

botones.IntTrianSupDer.addEventListener('click', () => {
  n1 = new Integer()
  m1.intercalarTriangularSuperiorDerecha(n1.verificarPrimo)
  textBox2.value = m1.descargar()
})

botones.IntTrianInfIzq.addEventListener('click', () => {
  n1 = new Integer()
  m1.intercalarTriangularInferiorIzquierda(n1.verificarCapicua)
  textBox2.value = m1.descargar()
})

botones.IntTrianInfDer.addEventListener('click', () => {
  n1 = new Integer()
  m1.intercalarTriangularInferiorDerecha(n1.verificarFibonacci)
  textBox2.value = m1.descargar()
})

// matriz 2
botones.Cargar2.addEventListener('click', () => {
  const nroFilas = botones.inputNroFilas.value
  const nroColumnas = botones.inputNroColumnas.value
  const inicio = botones.inputInicial.value
  const final = botones.inputFinal.value

  m2.cargar(
    parseInt(nroFilas),
    parseInt(nroColumnas),
    parseInt(inicio),
    parseInt(final)
  )
})

botones.Descargar2.addEventListener('click', () => {
  textBox2.value = m2.descargar()
})

botones.CargarSerieArit2.addEventListener('click', async () => {
  const result1 = await promptSwal('Filas')
  if (!result1.isConfirmed) return
  const result2 = await promptSwal('Columnas')
  if (!result2.isConfirmed) return
  const result3 = await promptSwal('Valor inicial')
  if (!result3.isConfirmed) return
  const result4 = await promptSwal('La razón')
  if (!result4.isConfirmed) return

  const nroFila = Number(result1.value)
  const nroColumna = Number(result2.value)
  const a1 = Number(result3.value)
  const r = Number(result4.value)

  m2.cargarSerieAritmetica(nroFila, nroColumna, a1, r)
})

botones.CargarSerieGeo2.addEventListener('click', async () => {
  const result1 = await promptSwal('Filas')
  if (!result1.isConfirmed) return
  const result2 = await promptSwal('Columnas')
  if (!result2.isConfirmed) return
  const result3 = await promptSwal('Valor inicial')
  if (!result3.isConfirmed) return
  const result4 = await promptSwal('La razón')
  if (!result4.isConfirmed) return

  const nroFila = Number(result1.value)
  const nroColumna = Number(result2.value)
  const a1 = Number(result3.value)
  const r = Number(result4.value)

  m2.cargarSerieGeometrica(nroFila, nroColumna, a1, r)
})

// matriz 3
botones.Cargar3.addEventListener('click', () => {
  const nroFilas = botones.inputNroFilas.value
  const nroColumnas = botones.inputNroColumnas.value
  const inicio = botones.inputInicial.value
  const final = botones.inputFinal.value

  m3.cargar(
    parseInt(nroFilas),
    parseInt(nroColumnas),
    parseInt(inicio),
    parseInt(final)
  )
})

botones.Descargar3.addEventListener('click', () => {
  textBox3.value = m3.descargar()
})

botones.Suma.addEventListener('click', () => {
  m3.suma(m1, m2)
  textBox3.value = m3.descargar()
})

botones.Resta.addEventListener('click', () => {
  m3.resta(m1, m2)
  textBox3.value = m3.descargar()
})

botones.Multiplicacion.addEventListener('click', () => {
  m3.multiplicacion(m1, m2)
  textBox3.value = m3.descargar()
})

botones.botonReset.addEventListener('click', async () => {
  const result = await confirDelete()
  if (result.isConfirmed) {
    m1 = new Matriz()
    m2 = new Matriz()
    m3 = new Matriz()

    n1 = new Integer()

    textBox1.value = ''
    textBox2.value = ''
    textBox3.value = ''

    check({
      title: 'Reiniciado',
      text: 'Se han reiniciado los objetos y los textbox',
      icon: 'success'
    })
  }
})
