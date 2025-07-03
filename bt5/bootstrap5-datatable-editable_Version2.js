$(document).ready(function() {
    console.log('Bootstrap 5 DataTables + X-editable initialized for user qnst at 2025-07-03 09:32:14');
    
    // Global variables
    let table;
    let editableConfigs = {};
    let isGlobalEditMode = false;
    let currentTimestamp = '2025-07-03 09:32:14';
    let currentUser = 'qnst';
    
    // Initialize everything
    initializeDataTable();
    setupEditableConfigurations();
    setupEventHandlers();
    
    function initializeDataTable() {
        // Sample data for demo (in production, this would come from server)
        const sampleData = generateSampleData();
        
        table = $('#users-datatable').DataTable({
            // Data source
            data: sampleData,
            
            // Column definitions
            columns: [
                { 
                    data: 'id',
                    title: 'ID',
                    width: '60px',
                    className: 'text-center'
                },
                { 
                    data: 'username',
                    title: 'Username',
                    render: function(data, type, row) {
                        if (type === 'display') {
                            return createEditableField(data, 'text', row.id, 'username', 'Enter username');
                        }
                        return data;
                    }
                },
                { 
                    data: 'email',
                    title: 'Email',
                    render: function(data, type, row) {
                        if (type === 'display') {
                            return createEditableField(data, 'email', row.id, 'email', 'Enter email address');
                        }
                        return data;
                    }
                },
                { 
                    data: 'fullName',
                    title: 'Full Name',
                    render: function(data, type, row) {
                        if (type === 'display') {
                            return createEditableField(data, 'text', row.id, 'fullName', 'Enter full name');
                        }
                        return data;
                    }
                },
                { 
                    data: 'status',
                    title: 'Status',
                    render: function(data, type, row) {
                        if (type === 'display') {
                            const statusClass = 'status-' + data.toLowerCase();
                            const editableHtml = createEditableField(data, 'select', row.id, 'status', 'Select status');
                            return `<span class="${statusClass}">${editableHtml}</span>`;
                        }
                        return data;
                    }
                },
                { 
                    data: 'role',
                    title: 'Role',
                    render: function(data, type, row) {
                        if (type === 'display') {
                            return createEditableField(data, 'select', row.id, 'role', 'Select role');
                        }
                        return data;
                    }
                },
                { 
                    data: 'lastLogin',
                    title: 'Last Login',
                    render: function(data, type, row) {
                        if (type === 'display') {
                            const formattedDate = moment(data).format('YYYY-MM-DD HH:mm:ss');
                            return createEditableField(formattedDate, 'datetime', row.id, 'lastLogin', 'Select date & time');
                        }
                        return data;
                    }
                },
                { 
                    data: 'createdAt',
                    title: 'Created',
                    render: function(data, type, row) {
                        if (type === 'display') {
                            return moment(data).format('YYYY-MM-DD HH:mm:ss');
                        }
                        return data;
                    }
                },
                { 
                    data: null,
                    orderable: false,
                    searchable: false,
                    title: 'Actions',
                    width: '200px',
                    className: 'text-center',
                    render: function(data, type, row) {
                        return createActionButtons(row.id);
                    }
                }
            ],
            
            // DataTables options
            order: [[0, 'desc']],
            pageLength: 10,
            lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
            responsive: true,
            
            // Bootstrap 5 styling
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel',
                    text: '<i class="bi bi-file-earmark-excel"></i> Excel',
                    className: 'btn btn-success btn-sm'
                },
                {
                    extend: 'pdf',
                    text: '<i class="bi bi-file-earmark-pdf"></i> PDF',
                    className: 'btn btn-danger btn-sm'
                },
                {
                    extend: 'print',
                    text: '<i class="bi bi-printer"></i> Print',
                    className: 'btn btn-info btn-sm'
                },
                {
                    extend: 'copy',
                    text: '<i class="bi bi-clipboard"></i> Copy',
                    className: 'btn btn-secondary btn-sm'
                }
            ],
            
            // Language
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search users...",
                lengthMenu: "Show _MENU_ entries",
                info: "Showing _START_ to _END_ of _TOTAL_ users",
                infoEmpty: "No users found",
                infoFiltered: "(filtered from _MAX_ total users)",
                paginate: {
                    first: "First",
                    last: "Last",
                    next: "Next",
                    previous: "Previous"
                }
            },
            
            // Callbacks
            drawCallback: function(settings) {
                // Re-initialize editables after each draw
                initializeEditables();
                console.log('DataTable redrawn, editables re-initialized for user qnst');
            },
            
            initComplete: function(settings, json) {
                console.log('Bootstrap 5 DataTable initialization complete for user qnst at 2025-07-03 09:32:14');
                initializeEditables();
                showNotification('DataTable loaded successfully!', 'success');
            }
        });
    }
    
    function createEditableField(value, type, pk, fieldName, title) {
        const emptyText = value || 'Click to edit';
        const editableClass = `editable editable-${fieldName}`;
        
        return `<a href="#" class="${editableClass}" 
                   data-type="${type}" 
                   data-pk="${pk}" 
                   data-name="${fieldName}"
                   data-url="/api/users/update" 
                   data-title="${title}"
                   data-placeholder="${title}">${emptyText}</a>`;
    }
    
    function createActionButtons(userId) {
        return `
            <div class="btn-group btn-group-xs table-actions" role="group">
                <button class="btn btn-outline-primary edit-row" data-user-id="${userId}" title="Edit Row">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-outline-success save-row" data-user-id="${userId}" title="Save Row" style="display:none;">
                    <i class="bi bi-check"></i>
                </button>
                <button class="btn btn-outline-warning cancel-row" data-user-id="${userId}" title="Cancel Row" style="display:none;">
                    <i class="bi bi-x"></i>
                </button>
                <button class="btn btn-outline-info duplicate-row" data-user-id="${userId}" title="Duplicate">
                    <i class="bi bi-copy"></i>
                </button>
                <button class="btn btn-outline-danger delete-row" data-user-id="${userId}" title="Delete">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        `;
    }
    
    function setupEditableConfigurations() {
        // Global X-editable configuration for Bootstrap 5
        $.fn.editable.defaults.mode = 'inline';
        $.fn.editable.defaults.emptytext = 'Click to edit';
        $.fn.editable.defaults.showbuttons = false;
        $.fn.editable.defaults.onblur = 'ignore';
        $.fn.editable.defaults.disabled = !isGlobalEditMode;
        
        // Field-specific configurations
        editableConfigs = {
            username: {
                validate: function(value) {
                    if(!value || $.trim(value) === '') return 'Username cannot be empty';
                    if(value.length < 3) return 'Username must be at least 3 characters';
                    if(!/^[a-zA-Z0-9_]+$/.test(value)) return 'Username: letters, numbers, underscores only';
                },
                success: function(response, newValue) {
                    logFieldUpdate('username', $(this).data('pk'), newValue);
                    showNotification(`Username updated to: ${newValue}`, 'success');
                },
                error: function(response, newValue) {
                    showNotification('Error updating username', 'danger');
                    return 'Update failed';
                }
            },
            
            email: {
                validate: function(value) {
                    if(!value || $.trim(value) === '') return 'Email cannot be empty';
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if(!emailRegex.test(value)) return 'Please enter a valid email address';
                },
                success: function(response, newValue) {
                    logFieldUpdate('email', $(this).data('pk'), newValue);
                    showNotification(`Email updated to: ${newValue}`, 'success');
                },
                error: function(response, newValue) {
                    showNotification('Error updating email', 'danger');
                    return 'Update failed';
                }
            },
            
            fullName: {
                validate: function(value) {
                    if(!value || $.trim(value) === '') return 'Full name cannot be empty';
                    if(value.length < 2) return 'Full name must be at least 2 characters';
                },
                success: function(response, newValue) {
                    logFieldUpdate('fullName', $(this).data('pk'), newValue);
                    showNotification(`Full name updated to: ${newValue}`, 'success');
                }
            },
            
            status: {
                source: [
                    {value: 'Active', text: 'Active'},
                    {value: 'Inactive', text: 'Inactive'},
                    {value: 'Suspended', text: 'Suspended'},
                    {value: 'Pending', text: 'Pending'}
                ],
                success: function(response, newValue) {
                    logFieldUpdate('status', $(this).data('pk'), newValue);
                    
                    // Update status styling
                    const $span = $(this).closest('span');
                    $span.removeClass('status-active status-inactive status-suspended status-pending');
                    $span.addClass('status-' + newValue.toLowerCase());
                    
                    showNotification(`Status updated to: ${newValue}`, 'success');
                }
            },
            
            role: {
                source: [
                    {value: 'User', text: 'User'},
                    {value: 'Admin', text: 'Admin'},
                    {value: 'Super Admin', text: 'Super Admin'},
                    {value: 'Moderator', text: 'Moderator'},
                    {value: 'Guest', text: 'Guest'}
                ],
                success: function(response, newValue) {
                    logFieldUpdate('role', $(this).data('pk'), newValue);
                    showNotification(`Role updated to: ${newValue}`, 'success');
                }
            },
            
            lastLogin: {
                format: 'yyyy-mm-dd hh:ii:ss',
                viewformat: 'yyyy-mm-dd hh:ii:ss',
                success: function(response, newValue) {
                    logFieldUpdate('lastLogin', $(this).data('pk'), newValue);
                    showNotification(`Last login updated to: ${newValue}`, 'success');
                }
            }
        };
    }
    
    function initializeEditables() {
        // Initialize all editable fields with their specific configurations
        Object.keys(editableConfigs).forEach(function(fieldName) {
            $(`.editable-${fieldName}`).editable(editableConfigs[fieldName]);
        });
        
        console.log('All editables initialized for current DataTable page');
    }
    
    function setupEventHandlers() {
        // Add new user
        $('#add-new-user').click(function() {
            $('#addUserModal').modal('show');
        });
        
        // Save new user
        $('#saveNewUser').click(function() {
            const newUser = {
                id: Date.now(), // Temporary ID
                username: $('#newUsername').val(),
                email: $('#newEmail').val(),
                fullName: $('#newFullName').val(),
                status: $('#newStatus').val(),
                role: $('#newRole').val(),
                lastLogin: currentTimestamp,
                createdAt: currentTimestamp
            };
            
            // Add to DataTable
            table.row.add(newUser).draw();
            
            // Close modal and reset form
            $('#addUserModal').modal('hide');
            $('#addUserForm')[0].reset();
            
            showNotification(`New user "${newUser.username}" added successfully!`, 'success');
            console.log(`New user added by ${currentUser}: ${JSON.stringify(newUser)}`);
        });
        
        // Save all changes
        $('#save-all-changes').click(function() {
            const $editRows = $('.edit-mode');
            if($editRows.length === 0) {
                showNotification('No rows in edit mode', 'warning');
                return;
            }
            
            let savedCount = 0;
            $editRows.each(function() {
                const userId = $(this).find('.save-row').data('user-id');
                if(saveRowChanges(userId)) {
                    savedCount++;
                }
            });
            
            showNotification(`${savedCount} rows saved successfully!`, 'success');
            console.log(`Save all changes: ${savedCount} rows saved by user ${currentUser} at ${currentTimestamp}`);
        });
        
        // Cancel all changes
        $('#cancel-all-changes').click(function() {
            const $editRows = $('.edit-mode');
            if($editRows.length === 0) {
                showNotification('No rows in edit mode', 'warning');
                return;
            }
            
            if(confirm('Cancel all pending changes?')) {
                let cancelledCount = 0;
                $editRows.each(function() {
                    const userId = $(this).find('.cancel-row').data('user-id');
                    if(cancelRowChanges(userId)) {
                        cancelledCount++;
                    }
                });
                
                showNotification(`${cancelledCount} rows cancelled`, 'warning');
                console.log(`Cancel all changes: ${cancelledCount} rows cancelled by user ${currentUser}`);
            }
        });
        
        // Toggle global edit mode
        $('#toggle-edit-mode').click(function() {
            isGlobalEditMode = !isGlobalEditMode;
            const $btn = $(this);
            
            if(isGlobalEditMode) {
                $btn.removeClass('btn-info').addClass('btn-warning')
                   .html('<i class="bi bi-lock"></i> Disable Edit Mode');
                $('.editable').editable('toggleDisabled');
                showNotification('Global edit mode enabled', 'info');
            } else {
                $btn.removeClass('btn-warning').addClass('btn-info')
                   .html('<i class="bi bi-pencil-square"></i> Toggle Edit Mode');
                $('.editable').editable('toggleDisabled');
                showNotification('Global edit mode disabled', 'info');
            }
            
            console.log(`Global edit mode toggled to: ${isGlobalEditMode} by user ${currentUser}`);
        });
        
        // Refresh table
        $('#refresh-table').click(function() {
            table.ajax.reload ? table.ajax.reload() : location.reload();
            showNotification('Table refreshed', 'success');
            console.log(`Table refreshed by user ${currentUser} at ${currentTimestamp}`);
        });
        
        // Row-level actions (using event delegation for dynamic content)
        $('#users-datatable').on('click', '.edit-row', function() {
            const userId = $(this).data('user-id');
            enterRowEditMode(userId);
        });
        
        $('#users-datatable').on('click', '.save-row', function() {
            const userId = $(this).data('user-id');
            saveRowChanges(userId);
        });
        
        $('#users-datatable').on('click', '.cancel-row', function() {
            const userId = $(this).data('user-id');
            cancelRowChanges(userId);
        });
        
        $('#users-datatable').on('click', '.duplicate-row', function() {
            const userId = $(this).data('user-id');
            duplicateUser(userId);
        });
        
        $('#users-datatable').on('click', '.delete-row', function() {
            const userId = $(this).data('user-id');
            deleteUser(userId);
        });
    }
    
    function enterRowEditMode(userId) {
        const $row = getRowByUserId(userId);
        
        // Enable editables for this row
        $row.find('.editable').editable('toggleDisabled');
        $row.addClass('edit-mode');
        
        // Toggle action buttons
        $row.find('.edit-row, .duplicate-row, .delete-row').hide();
        $row.find('.save-row, .cancel-row').show();
        
        console.log(`Edit mode enabled for user ${userId} by ${currentUser}`);
        showNotification(`Edit mode enabled for user ${userId}`, 'info');
    }
    
    function saveRowChanges(userId) {
        const $row = getRowByUserId(userId);
        const promises = [];
        
        // Submit all editables in this row
        $row.find('.editable').each(function() {
            if($(this).data('editable') && $(this).data('editable').isEnabled) {
                promises.push($(this).editable('submit'));
            }
        });
        
        // Wait for all updates to complete
        Promise.all(promises).then(function() {
            exitRowEditMode(userId);
            showNotification(`User ${userId} saved successfully!`, 'success');
            console.log(`All changes saved for user ${userId} by ${currentUser} at ${currentTimestamp}`);
            return true;
        }).catch(function() {
            showNotification(`Error saving user ${userId}`, 'danger');
            return false;
        });
    }
    
    function cancelRowChanges(userId) {
        const $row = getRowByUserId(userId);
        
        // Cancel all editables in this row
        $row.find('.editable').editable('cancel');
        exitRowEditMode(userId);
        
        console.log(`Changes cancelled for user ${userId} by ${currentUser}`);
        showNotification(`Changes cancelled for user ${userId}`, 'warning');
        return true;
    }
    
    function exitRowEditMode(userId) {
        const $row = getRowByUserId(userId);
        
        $row.removeClass('edit-mode');
        $row.find('.editable').editable('toggleDisabled');
        $row.find('.save-row, .cancel-row').hide();
        $row.find('.edit-row, .duplicate-row, .delete-row').show();
    }
    
    function duplicateUser(userId) {
        if(confirm(`Duplicate user ${userId}?`)) {
            // Get current row data
            const rowData = table.row(getRowByUserId(userId)).data();
            
            // Create duplicated user
            const duplicatedUser = {
                ...rowData,
                id: Date.now(), // New ID
                username: rowData.username + '_copy',
                email: 'copy_' + rowData.email,
                createdAt: currentTimestamp
            };
            
            // Add to table
            table.row.add(duplicatedUser).draw();
            
            showNotification(`User ${userId} duplicated successfully!`, 'success');
            console.log(`User ${userId} duplicated by ${currentUser} as ${duplicatedUser.id}`);
        }
    }
    
    function deleteUser(userId) {
        if(confirm(`Are you sure you want to delete user ${userId}?\nThis action cannot be undone.`)) {
            // Remove from DataTable
            table.row(getRowByUserId(userId)).remove().draw();
            
            showNotification(`User ${userId} deleted successfully!`, 'success');
            console.log(`User ${userId} deleted by ${currentUser} at ${currentTimestamp}`);
        }
    }
    
    function getRowByUserId(userId) {
        return $('#users-datatable tbody tr').filter(function() {
            return $(this).find(`[data-user-id="${userId}"]`).length > 0;
        });
    }
    
    function logFieldUpdate(fieldName, userId, newValue) {
        console.log(`[${currentTimestamp}] User ${currentUser} updated ${fieldName} for user ${userId} to: ${newValue}`);
    }
    
    function showNotification(message, type) {
        const alertClass = `alert-${type}`;
        const iconClass = {
            success: 'bi-check-circle',
            danger: 'bi-exclamation-triangle',
            warning: 'bi-exclamation-circle',
            info: 'bi-info-circle'
        }[type] || 'bi-info-circle';
        
        const $alert = $(`
            <div class="alert ${alertClass} alert-dismissible fade show" role="alert">
                <i class="bi ${iconClass} me-2"></i>
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `);
        
        $('#notification-container').append($alert);
        
        // Auto-remove after 4 seconds
        setTimeout(function() {
            $alert.alert('close');
        }, 4000);
    }
    
    function generateSampleData() {
        const baseTime = new Date('2025-07-03T09:32:14Z');
        
        return [
            {
                id: 1,
                username: 'qnst',
                email: 'qnst@example.com',
                fullName: 'QNST User',
                status: 'Active',
                role: 'Admin',
                lastLogin: new Date(baseTime.getTime()).toISOString(),
                createdAt: new Date(baseTime.getTime() - (30 * 24 * 60 * 60 * 1000)).toISOString()
            },
            {
                id: 2,
                username: 'admin',
                email: 'admin@example.com',
                fullName: 'System Administrator',
                status: 'Active',
                role: 'Super Admin',
                lastLogin: new Date(baseTime.getTime() - (15 * 60 * 1000)).toISOString(),
                createdAt: new Date(baseTime.getTime() - (60 * 24 * 60 * 60 * 1000)).toISOString()
            },
            {
                id: 3,
                username: 'john_doe',
                email: 'john@example.com',
                fullName: 'John Doe',
                status: 'Active',
                role: 'User',
                lastLogin: new Date(baseTime.getTime() - (2 * 60 * 60 * 1000)).toISOString(),
                createdAt: new Date(baseTime.getTime() - (10 * 24 * 60 * 60 * 1000)).toISOString()
            },
            {
                id: 4,
                username: 'jane_smith',
                email: 'jane@example.com',
                fullName: 'Jane Smith',
                status: 'Inactive',
                role: 'Moderator',
                lastLogin: new Date(baseTime.getTime() - (5 * 24 * 60 * 60 * 1000)).toISOString(),
                createdAt: new Date(baseTime.getTime() - (20 * 24 * 60 * 60 * 1000)).toISOString()
            },
            {
                id: 5,
                username: 'test_user',
                email: 'test@example.com',
                fullName: 'Test User',
                status: 'Pending',
                role: 'User',
                lastLogin: new Date(baseTime.getTime() - (1 * 24 * 60 * 60 * 1000)).toISOString(),
                createdAt: new Date(baseTime.getTime() - (2 * 24 * 60 * 60 * 1000)).toISOString()
            },
            {
                id: 6,
                username: 'suspended_user',
                email: 'suspended@example.com',
                fullName: 'Suspended User',
                status: 'Suspended',
                role: 'Guest',
                lastLogin: new Date(baseTime.getTime() - (10 * 24 * 60 * 60 * 1000)).toISOString(),
                createdAt: new Date(baseTime.getTime() - (15 * 24 * 60 * 60 * 1000)).toISOString()
            }
        ];
    }
});