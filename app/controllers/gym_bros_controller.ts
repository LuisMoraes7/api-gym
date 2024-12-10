import type { HttpContext } from '@adonisjs/core/http'
import GymBro from '#models/gym_bro'
export default class GymBrosController {
    public async store({request, response}: HttpContext){
        const body = request.body()
        const gymBro = await GymBro.create(body)
        response.status(201)
        return{
            message: 'Gymbro criado com sucesso!',
            data: gymBro
        }

    }

    public async index(){
        const gymBros = await GymBro.all()
        return{
            message: 'Carregando...',
            data: gymBros
        }
    }

    public async show({ params }: HttpContext){
        const gymBro = await GymBro.findBy('username', params.id)

        if (!gymBro){
            return{
                message: 'Usuário não encontrado'
            }
        }
        return{
            data: gymBro
        }
    }

    public async update({params, request}: HttpContext){
        const body = request.body()
        const gymBro = await GymBro.findBy('username', params.id)
        if (!gymBro){
            return{
                message: 'Username não encontrado.'
            }
        }
        gymBro.workouts += body.workouts
        await gymBro.save()
        return{
            message: 'Atualizei o GymBro!',
            data: gymBro
        }
    }

    public async destroy({params}: HttpContext){
        const gymBro = await GymBro.findOrFail(params.id)
        await gymBro.delete()
        return{
            message: 'GymBro deletado.',
            data: gymBro
        }
    }
}
