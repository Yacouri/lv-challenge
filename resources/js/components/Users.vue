<template>
    <div>
        <div class="col-12 mt-5">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Users table</h3>

                    <div class="card-tools">
                        <button class="btn btn-success"
                                data-bs-toggle="modal"
                                data-bs-target="#addNewUser">
                            Add user <i class="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Type</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>183</td>
                                <td>John Doe</td>
                                <td>11-7-2014</td>
                                <td>
                                    <span class="tag tag-success"
                                        >Approved</span
                                    >
                                </td>
                                <td>
                                    <a><i class="fa fa-eye"></i></a> |
                                    <a><i class="fa fa-edit"></i></a> |
                                    <a><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
            </div>
            <div
                class="modal fade"
                id="addNewUser"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                New user
                            </h5>
                            <button
                                type="button"
                                class="btn fa fa-times"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <form @submit.prevent="createUser">
                            <div class="modal-body">
                                <div class="form-group">
                                    <input 
                                        type="text"
                                        name="name"
                                        class="form-control"
                                        v-model="form.name"
                                        :class="{'is-invalid': form.errors.has('name')}"
                                        placeholder="Name"
                                        >
                                    <has-error :form="form" field="name"></has-error>
                                </div>
                                <div class="form-group">
                                    <input 
                                        type="email"
                                        name="email"
                                        class="form-control"
                                        v-model="form.email"
                                        :class="{'is-invalid': form.errors.has('email')}"
                                        placeholder="Email"
                                        >
                                    <has-error :form="form" field="email"></has-error>
                                </div>
                                <div class="form-group">
                                    <input 
                                        type="password"
                                        name="password"
                                        class="form-control"
                                        v-model="form.password"
                                        :class="{'is-invalid': form.errors.has('password')}"
                                        placeholder="Password"
                                        >
                                    <has-error :form="form" field="password"></has-error>
                                </div>
                                <div class="form-group">
                                    <select
                                        name="type"
                                        class="form-control"
                                        v-model="form.type"
                                        :class="{'is-invalid': form.errors.has('type')}">
                                        <option selected disabled>-- Select a role --</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Standard User">Standard User</option>
                                        <option value="Author">Author</option>
                                    </select>
                                    <has-error
                                        :form="form"
                                        field="type">
                                    </has-error>
                                </div>
                                <div class="form-group">
                                    <textarea
                                        class="form-control"
                                        name="bio"
                                        v-model="form.bio"
                                        :class="{'is-invalid': form.errors.has('bio')}"
                                        placeholder="Biography (Optional)">
                                    </textarea>
                                    <has-error :form="form" field="bio"></has-error>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button type="submit" class="btn btn-primary">
                                    Create user
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <!-- /.card -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form: new Form({
                name: '',
                email: '',
                password: '',
                type: '',
                bio: '',
                photo: ''
            })
        }
    },
    methods: {
        createUser(){
            this.form.post('api/user');
        }
    }
}
</script>