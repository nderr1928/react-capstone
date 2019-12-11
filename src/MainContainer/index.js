import React from 'react';
import {Card, Header} from 'semantic-ui-react';
import ShowSavedMedication from '../ShowSavedMedication';
import EditSavedMedicineForm from '../EditSavedMedicineForm'

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            medicines: [],
            showSavedMedicine: false,
            isLogged: this.props.isLogged,
            editModal: false,
            medicineToEdit: {
                brand_name: '',
                drug_id: '',
                dosage: '',
                dosage_unit: '',
                refill_needed: '',
                frequency_value: '',
                frequency_unit: '',
                id: ''
            }
        }
    }
    componentDidMount = () => {
        this.getSavedMedicines()
    }
    getSavedMedicines = async () => {
        if(sessionStorage.getItem('sessionUserId')){
            try{
                const medicinesResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/medicines/${sessionStorage.getItem('sessionUserId')}`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                const parsedResponse = await medicinesResponse.json()
                // console.log(parsedResponse.data)
                this.setState({
                    medicines: parsedResponse.data,
                    showSavedMedicine: true
                })
            } catch(err){
                // console.log(err)
                this.setState({
                    medicines: 'Must be logged in to use this feature'
                })
            }
        } else{
            return 'no user logged'
        }
    }
    deleteMedicine = async (id) => {
        const deleteMedicineResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/medicines/${id}/`, {
            method: 'DELETE',
            credentials: 'include'
        })
        const deletedMedicineParsed = await deleteMedicineResponse.json()
        // console.log(deletedMedicineParsed);
        this.setState({medicines: this.state.medicines.filter((medicine) => medicine.id !== id )})
    }
    updateTime = async (id) => {
        const updateTimeResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/medicines/update_time/${id}`, {
            method: 'PUT',
            credentials: 'include'
        })
        const parsedResponse = await updateTimeResponse.json()
        // console.log('parsedResponse:',parsedResponse)
        const updatedMedicines = this.state.medicines.map((medicine) => {
            // console.log('current medicine:',medicine)
            if(medicine.id === parsedResponse.data.id) {
                medicine = parsedResponse.data
            }
            return medicine
        })
        this.setState({
            medicines: updatedMedicines,
        })
    }
    openEditModal = async (medicineInfo) => {
        // console.log('medicineInfo:', medicineInfo)
        // console.log('brand_name:',medicineInfo.brand_name)
        await this.setState({
            editModal: true,
            medicineToEdit: {
                brand_name: medicineInfo.brand_name,
                drug_id: medicineInfo.drug_id,
                dosage: medicineInfo.dosage,
                dosage_unit: medicineInfo.dosage_unit,
                refill_needed: medicineInfo.refill_needed,
                frequency_value: medicineInfo.frequency_value,
                frequency_unit: medicineInfo.frequency_unit,
                id: medicineInfo.id
            }
        })
        // console.log('medicine to edit:',this.state.medicineToEdit)
    }
    closeEditModal = () => {
        this.setState({
            editModal: false
        })
    }
    submitEdit = async (id, newText) => {
        const editResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/medicines/update/${id}`, {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(newText),
            headers: {
                'Content-type': 'application/json'
            }
        })
        // console.log(editResponse)
        const parsedResponse = await editResponse.json()
        // console.log(parsedResponse)
        const updatedMedicines = this.state.medicines.map((medicine) => {
            // console.log('current medicine:',medicine)
            if(medicine.id === parsedResponse.data.id) {
                medicine = parsedResponse.data
            }
            return medicine
        })
        this.setState({
            medicines: updatedMedicines
        })
        this.closeEditModal()
    }
    render(){
        return(
            <div>
                <h1>Main body</h1>
                <Card centered>
                    <Header>
                        <h1 style={{textAlign: 'center'}}>Saved Medication</h1>
                    </Header>
                    <Card.Content>
                        {this.state.showSavedMedicine ? <ShowSavedMedication savedMedicines={this.state.medicines} deleteMedicine={this.deleteMedicine} updateTime={this.updateTime} openEditModal={this.openEditModal}/> : null}
                    </Card.Content>
                </Card>
                { this.state.editModal ? <EditSavedMedicineForm open={this.state.editModal} close={this.closeEditModal} currentMedicine={this.state.medicineToEdit} submitEdit={this.submitEdit}/> : null}
            </div>
        )
    }
}

export default MainContainer;