import { routePrefix, route } from '../router';
import Service from '../common/service.decorator';
import ActivityService from '../services/activity.service';
import BasController from '../common/bas.controller';
import EmployeeService from '../services/employee.service';
import context from '../common/context'

var service = new Service();

@routePrefix('activity')
@Service(ActivityService,'activity')
export default class Conteroller extends BasController{
    constructor(){
        super();        
        this.employeeService = new EmployeeService();
    }
    @route('item/:id') 
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

    @route('create', 'get',false)
    createItem() {        
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

