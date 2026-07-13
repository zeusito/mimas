<script lang="ts">
    import { enhance } from "$app/forms";
</script>

<div class="card mx-auto w-full max-w-md bg-base-100 shadow-xl">
    <div class="card-body">
        <h2 class="card-title">Login</h2>

        <form
            method="POST"
            class="flex flex-col gap-4"
            use:enhance
        >
           <fieldset class="fieldset">

            <label class="label" for="email">Email</label>
            <input type="email" class="input" placeholder="Email" id="email" name="email" required />

            <label class="label" for="password">Password</label>
            <input type="password" class="input" placeholder="Password" id="password" name="password" required />
        </fieldset>

            <div class="card-actions justify-end">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
</div>