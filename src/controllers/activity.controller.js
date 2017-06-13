import { routePrefix, route } from '../router';
import Service from '../services/activity.service';
import BasController from '../common/bas.controller';
import EmployeeService from '../service/employee.servce';



@routePrefix('activity')
export class Conteroller extends BasController{
    constructor(){
        super(new Service());          
        this.employeeService = new EmployeeService();
    }
    @route(':id') 
    async getItem({ id }) {
        return await this.service.getItem(id);
    }

    @route('list/:fitler')
    async getItems({ filter }) {
        var lookups = {};
        var activities = await this.service.getLikeList(filter);
        var employees = await this.getLookup(activities, 'employee_id', this.employeeService);
        return this.toCollection(activities,[employees],activities.length);
    }

    @route('create', 'get')
    async createItem() {
        return {
            
        };
    }

    @route('save', 'post')
    async saveItem(data) {
    }

    @route(':id', 'delete')
    async deleteItem({ id }) {
    }
}

