<template>
  <div class="q-ma-lg">
    <div class="text-h5 text-weight-bold">Listar Currículos</div>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input v-model="form.first_name" label="Primeiro Nome" />
          <q-input v-model="form.last_name" label="Último Nome" />
          <q-input v-model="form.email" label="E-mail" />
          <q-input v-model="form.confirmado" label="Confirmado" />
          <div>
            <q-btn label="Enviar" type="submit" color="primary" />
            <q-btn
              label="Limpar"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </div>
    </div>

    <div class="q-my-lg">
      <q-list bordered separator>
        <q-item
          clickable
          v-ripple
          v-for="curriculo in curriculos"
          :key="curriculo.id"
        >
          <q-item-section>
            <q-item-label>
              {{ curriculo.first_name }}
              {{ curriculo.last_name }}
            </q-item-label>
            <q-item-label caption>{{ curriculo.email }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useMeta } from "quasar";
import curriculoService from "src/services/CurriculoService";

const metaData = {
  title: "Listar Currículo",
  titleTemplate: (title) => `${title} - App Currículo`,
};

export default {
  setup() {
    useMeta(metaData);
    const curriculos = ref([{}]);
    const form = ref({});

    const { listar, salvar } = curriculoService();
    const listarCurriculos = async () => {
      curriculos.value = await listar();
    };

    const onSubmit = async () => {
      try {
        await salvar(form.value);
        listarCurriculos();
      } catch (error) {
        console.log(error.message);
      }
    };

    onMounted(() => {
      listarCurriculos();
    });

    return {
      curriculos,
      form,
      onSubmit,
    };
  },
};
</script>

<style lang="css" scoped></style>
